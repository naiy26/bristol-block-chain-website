const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}) });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    for (const route of ['/', '/about', '/events', '/learn', '/join', '/admin']) {
      const response = await page.goto(`http://127.0.0.1:3000${route}`);
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator('h1').count(), 1, route);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Desktop overflow: ${route}`);
    }
    await page.goto('http://127.0.0.1:3000/');
    await page.screenshot({ path: path.resolve('artifacts/desktop-preview.png'), fullPage: true });
    await page.goto('http://127.0.0.1:3000/events');
    assert.equal(await page.locator('.event-card').count(), 5);
    await page.getByRole('button', { name: 'Past events', exact: true }).click();
    assert.equal(await page.locator('.event-card').count(), 1);
    await page.getByRole('button', { name: 'Upcoming events', exact: true }).click();
    await page.locator('.select-label select').selectOption('Workshop');
    assert.equal(await page.locator('.event-card').count(), 2);
    await page.getByRole('button', { name: 'Registration details', exact: true }).first().click();
    await page.getByRole('dialog').waitFor({ state: 'visible' });
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('dialog').count(), 0);
    await page.goto('http://127.0.0.1:3000/learn');
    await page.getByLabel('Search learning resources').fill('zombies');
    assert.equal(await page.locator('.resource-card').count(), 1);
    await page.getByLabel('Search learning resources').fill('no-such-resource');
    await page.getByText('No resources found.', { exact: true }).waitFor();
    await page.goto('http://127.0.0.1:3000/join');
    await page.getByRole('button', { name: 'Preview registration' }).click();
    assert.equal(await page.locator('.success-message').count(), 0);
    await page.getByLabel('Full name').fill('Demo Student');
    await page.getByLabel('Email address').fill('demo@example.com');
    await page.getByLabel('Degree / Course').fill('Engineering');
    await page.getByLabel('Year of study').selectOption('Year 1');
    await page.getByLabel('Blockchain experience').selectOption('Beginner');
    await page.getByLabel('Blockchain fundamentals', { exact: true }).check();
    await page.locator('[name=acknowledgement]').check();
    await page.getByRole('button', { name: 'Preview registration' }).click();
    await page.getByText('Your demo form is valid.', { exact: true }).waitFor();
    await page.goto('http://127.0.0.1:3000/admin');
    await page.getByRole('button', { name: 'Events', exact: true }).click();
    await page.getByRole('button', { name: 'Edit preview' }).first().click();
    await page.getByLabel('Title', { exact: true }).fill('Edited sample event');
    await page.getByRole('button', { name: 'Apply to preview' }).click();
    await page.getByText('Edited sample event', { exact: true }).waitFor();
    await page.reload();
    await page.getByRole('button', { name: 'Events', exact: true }).click();
    assert.equal(await page.getByText('Edited sample event', { exact: true }).count(), 0);
    await page.setViewportSize({ width: 390, height: 844 });
    for (const route of ['/', '/about', '/events', '/learn', '/join', '/admin']) {
      await page.goto(`http://127.0.0.1:3000${route}`);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Mobile overflow: ${route}`);
    }
    await page.goto('http://127.0.0.1:3000/');
    await page.screenshot({ path: path.resolve('artifacts/mobile-preview.png'), fullPage: true });
    await page.getByRole('button', { name: 'Open menu' }).click();
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Learn', exact: true }).click();
    await page.waitForURL('**/learn');
    assert.deepEqual(errors, []);
    console.log('PASS: all six routes; desktop/mobile overflow; mobile navigation; event filters and keyboard dialog; resource search; membership validation; admin editing/reset; no browser errors.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
