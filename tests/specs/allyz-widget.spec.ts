import { test } from '../fixtures/base';

test.describe('Test allyz-widgets', async () => {
  test('basic test', async ({ claimPage }) => {
    await claimPage.navigate();
    await claimPage.fillValues();
    await claimPage.checkState();
  });
});
