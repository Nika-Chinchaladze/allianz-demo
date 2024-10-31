import { test } from '../fixtures/base';

// use tags -> from package.json + regular expressions
// steps
test.describe('Test allyz-widgets', async () => {
  test('basic test', async ({ claimPage }) => {
    await claimPage.navigate();
    await claimPage.fillValues();
    await claimPage.checkState();
  });
});
