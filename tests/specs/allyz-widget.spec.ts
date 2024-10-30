import { test } from '../fixtures/base';

test.describe('Test allyz-widgets', async () => {
  test('basic test', async ({ claimPage }) => {
    await claimPage.actions.goto(claimPage.baseUrl);
    await claimPage.waiters.waitForUrl(claimPage.baseUrl, 5000);
    await claimPage.actions.setValueInField(
      claimPage.policyNumberInput,
      process.env.POLICY_ID as string,
    );
    await claimPage.actions.clickOnElement(claimPage.continueBtn);
    await claimPage.waiters.waitForUrl(claimPage.baseUrl, 5000);
    await claimPage.waiters.waitForSelector(claimPage.title, 15000);
    await claimPage.assertions.verifyPageUrl(claimPage.baseUrl);
  });
});
