const express = require('express');
const { Connection, Client } = require('@temporalio/client');

const router = express.Router();

router.post('/search-hotels', async (req, res) => {
  const { city, checkIn, checkOut } = req.body;

  try {
    const connection = await Connection.connect();
    const client = new Client({ connection });

    const result = await client.workflow.execute('hotelWorkflow', {
      taskQueue: 'hotel-search',
      workflowId: `search-${Date.now()}`,
      args: [{ city, checkIn, checkOut }],
    });

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Workflow failed', details: err.message });
  }
});

module.exports = router;
