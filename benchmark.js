const puppeteer = require('puppeteer');
const ss = require('simple-statistics')

const RUNS = 100;

async function main() {
  const metrics = {
    baseui: [],
    material: [],
    antd: []
  };

  for (let i = 0; i < RUNS; i++) {
    const timing = await getPaintMetric('baseui');
    metrics.baseui.push(timing);
  }

  for (let i = 0; i < RUNS; i++) {
    const timing = await getPaintMetric('material');
    metrics.material.push(timing);
  }

  for (let i = 0; i < RUNS; i++) {
    const timing = await getPaintMetric('antd');
    metrics.antd.push(timing);
  }

  console.log('baseui', ss.mean(metrics.baseui))
  console.log('material', ss.mean(metrics.material))
  console.log('antd', ss.mean(metrics.antd))
}

async function getPaintMetric(library) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000/?app=${library}`, {
    waitUntil: 'networkidle0'
  });

  const result = await page.evaluate(() => {
    let firstContentfulPaintTiming;
    const paintMetrics = performance.getEntriesByType('paint');
    paintMetrics.forEach(metric => {
      if (metric.name === 'first-contentful-paint') {
        firstContentfulPaintTiming = metric.startTime;
      }
    })
    return firstContentfulPaintTiming;
  });

  await browser.close();
  return result
}



main()
  .then(console.log)
  .catch(console.error)
