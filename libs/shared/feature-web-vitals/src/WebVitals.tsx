import * as React from 'react';

import { useReportWebVitals } from 'next/web-vitals';

const reportMetrics = ({
  url,
  log,
  metric,
}: {
  metric: Record<string, unknown>;
} & Props) => {
  if (log === 2) {
    console.info('Full Web Vitals metric:', metric);
  }
  if (log === 1) {
    console.info('Reporting metric -', metric.name, metric.value);
  }

  if (!url) {
    return;
  }

  const metricReport = JSON.stringify(metric);

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, metricReport);
  } else {
    fetch(url, { body: metricReport, method: 'POST', keepalive: true });
  }
};

type Props = {
  url?: string;
  log?: number;
};
/*
 * WebVitals: report web vitals metrics
 *
 * @param {string} url - URL to send the metrics to
 * @param {number} log - Log level: 2 full, 1 light, 0 none
 */
export const WebVitals: React.FC<Props> = (props) => {
  useReportWebVitals((metric) => {
    reportMetrics({ ...props, metric });
  });

  return null;
};
