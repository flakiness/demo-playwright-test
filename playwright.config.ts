import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['@flakiness/report/playwright-test'],
  ],
  retries: 1,
});
