import * as dotenv from 'dotenv';
dotenv.config();

import { test as setup } from '@playwright/test';
import { ClaimPage } from './pageObjects/claim.page';
import { ApiClaim } from './apiGate/api-claim';
import { AUTH_TOKEN } from './helper/setAuthToken';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Back End
  const apiClaim = new ApiClaim();
  await apiClaim.postAuthToken();

  // Front End
  const claimPage = new ClaimPage(page);
  await claimPage.actions.goto(claimPage.baseUrl);
  await claimPage.actions.setToken(AUTH_TOKEN);

  await claimPage.waiters.waitForUrl(claimPage.baseUrl, 5000);
  await claimPage.actions.setValueInField(
    claimPage.policyNumberInput,
    `${process.env.POLICY_ID}`,
  );
  await claimPage.actions.clickOnElement(claimPage.continueBtn);
  await claimPage.waiters.waitForUrl(claimPage.baseUrl, 5000);
  await claimPage.waiters.waitForSelector(claimPage.title, 15000);
  await claimPage.assertions.verifyPageUrl(claimPage.baseUrl);

  // End of authentication step
  await page.context().storageState({ path: authFile });
  await claimPage.waiters.waitForTimeOut(5000);
});
