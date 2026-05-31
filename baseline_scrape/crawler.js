const { chromium } = require('playwright');
const fs = require('fs-extra');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

const START_URL = 'https://www.accentdentalcaresd.com';
const MAX_PAGES = 200;

const visited = new Set();
const queue = [START_URL];

function normalize(url) {
  return url.split('#')[0].replace(/\/$/, '');
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ignoreHTTPSErrors: true
  });
  const page = await context.newPage();

  const results = [];

  while (queue.length && visited.size < MAX_PAGES) {
    const url = normalize(queue.shift());
    if (visited.has(url)) continue;
    visited.add(url);

    console.log('Visiting:', url);

    try {
      await page.goto(url, { waitUntil: 'networkidle' });

      const html = await page.content();

      // Extract clean readable content
      const dom = new JSDOM(html, { url });
      const reader = new Readability(dom.window.document);
      const article = reader.parse();

      // Extract links for structure
      const links = await page.$$eval('a[href]', as =>
        as.map(a => a.href)
      );

      for (const link of links) {
        if (link.startsWith(START_URL)) {
          const n = normalize(link);
          if (!visited.has(n)) queue.push(n);
        }
      }

      const data = {
        url,
        title: article?.title || await page.title(),
        text: article?.textContent || '',
        excerpt: article?.excerpt || '',
        headings: extractHeadings(html),
        outgoing_links: [...new Set(links)].filter(l => l.startsWith(START_URL))
      };

      results.push(data);

    } catch (e) {
      console.log('Failed:', url, e.message);
    }
  }

  await fs.writeJson('./site-content.json', results, { spaces: 2 });

  await browser.close();
})();

function extractHeadings(html) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  return [...doc.querySelectorAll('h1,h2,h3')].map(h => ({
    level: h.tagName,
    text: h.textContent.trim()
  }));
}