import { expect, type Locator, type Page } from "@playwright/test";

export class ClaimPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://altair-uat.allianz-partners.com/claims');
    }
}
