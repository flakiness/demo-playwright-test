import { expect, test } from '@playwright/test';

test('passing test', async () => {
  await test.step('uno', () => {});
  await test.step('dos', () => {});
  await test.step('tres', () => {});
});

test('failing test', async () => {
  expect(1).toBe(2);
});

test('flaky test', async () => {
  expect(test.info().retry).toBe(1);
});
