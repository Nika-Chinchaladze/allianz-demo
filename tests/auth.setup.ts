import { test as setup, expect } from '@playwright/test';
import { ClaimPage } from './pageObjects/claim.page';
import { ApiClaim } from './apiGate/api-claim';
import { AUTH_TOKEN } from './env/test.env';
// import { isAuthStateAvailable } from './helper/checkAuthState';
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
    await claimPage.assertions.verifyPageUrl(claimPage.baseUrl);

    await claimPage.actions.setValueInField(claimPage.policyNumberInput, 'OCR5DEU0000004');
    await claimPage.actions.clickOnElement(claimPage.continueBtn);

    await claimPage.waiters.waitForUrl(claimPage.baseUrl, 5000);
    await claimPage.actions.clickOnElement(claimPage.continueBtn);
    await claimPage.assertions.verifyPageUrl(claimPage.baseUrl);

    // End of authentication step
    await claimPage.actions.savePageContext(authFile);
    await claimPage.waiters.waitForTimeOut(5000);
});
