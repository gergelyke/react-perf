const puppeteer = require('puppeteer');
const ss = require('simple-statistics')
const RUNS = 100;

async function main() {
  const browser = await puppeteer.launch();
  const metrics = {
    baseui: [],
    material: [],
    antd: []
  };

  for (let i = 0; i < RUNS; i++) {
    const timing = await getPaintMetric(browser, 'baseui');
    metrics.baseui.push(timing);
  }

  for (let i = 0; i < RUNS; i++) {
    const timing = await getPaintMetric(browser, 'material');
    metrics.material.push(timing);
  }

  for (let i = 0; i < RUNS; i++) {
    const timing = await getPaintMetric(browser, 'antd');
    metrics.antd.push(timing);
  }

  console.log('baseui', ss.mean(metrics.baseui))
  console.log('material', ss.mean(metrics.material))
  console.log('antd', ss.mean(metrics.antd))
  await browser.close();
}

async function getPaintMetric(browser, library) {
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

  return result
}



main()
  .then(console.log)
  .catch(console.error)
