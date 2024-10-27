import { Page } from "@playwright/test";

export class Waiters {
    public page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async waitForSelector(element: string, amount: number): Promise<void> {
        await this.page.waitForSelector(element, { timeout: amount });
    }

    async waitForTimeOut(amount: number): Promise<void> {
        await this.page.waitForTimeout(amount);
    }

    async waitForUrl(url: string, amount: number): Promise<void> {
        await this.page.waitForURL(url, { timeout: amount });
    }
}
