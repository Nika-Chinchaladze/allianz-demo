import { test as setup, expect } from '@playwright/test';
import { ClaimPage } from './pageObjects/claim.page';
import { ApiClaim } from './apiGate/api-claim';
import { AUTH_TOKEN } from './env/test.env';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    // Back End
    const apiClaim = new ApiClaim();
    await apiClaim.postAuthToken();

    // Front End
    const claimPage = new ClaimPage(page);
    await claimPage.goto();
    await claimPage.setToken(AUTH_TOKEN);
    await expect(page).toHaveURL(claimPage.baseUrl);

    await page.locator(claimPage.policyNumberInput).fill('OCR5DEU0000004')
    await page.locator(claimPage.continueBtn).click();

    await page.waitForURL(claimPage.baseUrl, { timeout: 5000 });
    await page.locator(claimPage.continueBtn).click();
    await expect(page).toHaveURL(claimPage.baseUrl);

    // End of authentication step
    await page.context().storageState({ path: authFile });
    await page.waitForTimeout(5000);
});
