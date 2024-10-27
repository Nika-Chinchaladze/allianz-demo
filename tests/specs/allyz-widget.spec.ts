import { test } from '@playwright/test';
import { ClaimPage } from '../pageObjects/claim.page';

test.describe('Test allyz-widgets', async () => {
    test('basic test', async ({ page }) => {
        const claimPage = new ClaimPage(page);
        await claimPage.actions.goto(claimPage.baseUrl);
        await claimPage.actions.setValueInField(claimPage.policyNumberInput, 'OCR5DEU0000004');
        await claimPage.actions.clickOnElement(claimPage.continueBtn);
        await claimPage.waiters.waitForUrl(claimPage.baseUrl, 5000);
    });
});
