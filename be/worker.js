const { Worker } = require('@temporalio/worker');

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows/hotelWorkflow'),
    activities: require('./workflows/activities'),
    taskQueue: 'hotel-search',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
