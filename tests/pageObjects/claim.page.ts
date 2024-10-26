import { expect, type Locator, type Page } from "@playwright/test";

export class ClaimPage {
    readonly page: Page;
    readonly baseUrl: string;

    public policyNumberInput: string = '//input';
    public continueBtn: string = '//span[contains(text(), "Continue")]';
    public title: string = '//h1[contains(text(), "Claim type")]';

    constructor(page: Page) {
        this.page = page;
        this.baseUrl = 'https://altair-dev.allianz-partners.com/claims';
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async setToken(myToken: string): Promise<void> {
        await this.page.evaluate((token) => {
            const idToken = { token: token };
            localStorage.setItem('idToken', JSON.stringify(idToken));
        }, myToken);
        await this.page.reload();
    }
}
