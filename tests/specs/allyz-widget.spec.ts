import { test, expect } from '@playwright/test';
import { ClaimPage } from '../pageObjects/claim.page';

test.describe('Test allyz-widgets', async () => {
    test('basic test', async ({ page }) => {
        const claimPage = new ClaimPage(page);
        await claimPage.goto();
        await page.locator(claimPage.policyNumberInput).fill('OCR5DEU0000004')
        await page.locator(claimPage.continueBtn).click();
        await page.waitForTimeout(5000);
        expect(page).toHaveURL(claimPage.baseUrl);
    });
});
