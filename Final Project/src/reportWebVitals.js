export function getCLS(onReport) {
  // Function definition
}

export function getFID(onReport) {
  // Function definition
}

export function getFCP(onReport) {
  // Function definition
}

export function getLCP(onReport) {
  // Function definition
}

export function getTTFB(onReport) {
  // Function definition
}

function sendToAnalytics(metric) {
  const { name, delta, value, id } = metric;
  // Send the metric data to your analytics service
  console.log(name, delta, value, id);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
