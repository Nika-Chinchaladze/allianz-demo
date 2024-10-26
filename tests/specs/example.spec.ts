import { test, expect } from '@playwright/test';
import { ClaimPage } from '../pageObjects/claim-page';

test('basic test', async ({ page }) => {
  const claimPage = new ClaimPage(page);
  await claimPage.goto();
});
