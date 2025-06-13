import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },
  reporter: [
    ['html'],
    ['@flakiness/report/playwright-test', {
      // endpoint: 'http://localhost:3000',
      // collectBrowserVersions: true,
    }],
  ],
  retries: 1,
});
