import { test as base } from '@playwright/test';
import { ClaimPage } from '../pageObjects/claim.page';

type MyFixtures = {
  claimPage: ClaimPage;
};

export const test = base.extend<MyFixtures>({
  claimPage: async ({ page }, use) => {
    await use(new ClaimPage(page));
  },
});

export { expect } from '@playwright/test';
