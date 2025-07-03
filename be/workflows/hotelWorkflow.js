const { proxyActivities } = require('@temporalio/workflow');

const activities = proxyActivities({
  startToCloseTimeout: '6s',
});

async function hotelWorkflow(input) {
  const [a, b] = await Promise.allSettled([
    activities.getHotelFromSupplierA(input),
    activities.getHotelFromSupplierB(input),
  ]);

  const results = [a, b]
    .filter(r => r.status === 'fulfilled' && r.value)
    .map(r => r.value);

  if (results.length === 0) throw new Error('All suppliers failed');

  return results.reduce((min, curr) => curr.price < min.price ? curr : min);
}

exports.hotelWorkflow = hotelWorkflow;
