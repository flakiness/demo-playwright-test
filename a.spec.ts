import { expect, test } from '@playwright/test';

test('passing test', {
  tag: '@smoke',
},async () => {
  test.slow();
  //expect(10000, 'whoa').toBe(100);
  console.log('foo bar baz!!!');
  console.log(`
      and this is
      some multiline
      log
  `);
  await test.info().attach('my-log.txt', {
    body: 'This is some random text',
    contentType: 'text/plain',
  });
  await test.info().attach('my-log.txt', {
    path: __filename,
    contentType: 'text/plain',
  });
  await test.step('uno', () => {});
  await test.step('dos', () => {});
  await test.step('tres', () => {});
});

test('failing test', async () => {
  await test.step('step-1', async () => {
    await test.step('nested-step-1', async () => {
      expect.soft(1).toBe(3);
    });
    await test.step('nested-step-2', async () => {
      expect(2).toBe(2);
    });
    expect(10).toBe(20);
  });
});

test('flaky test', {
  tag: ['@regression', '@smoke'],
}, async () => {
  expect(test.info().retry).toBe(1);
});

test('trace', async ({ page }) => {
  await page.goto('https://dev.flakiness.io/docs');
  await expect.soft(page).toHaveScreenshot();
  await expect.soft(page).toHaveScreenshot();
});

test.skip('trace-skipped', async ({ page }) => {
  await page.goto('https://dev.flakiness.io/docs');
  await expect.soft(page).toHaveScreenshot();
  await expect.soft(page).toHaveScreenshot();
});
