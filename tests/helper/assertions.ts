import { Page, expect } from "@playwright/test";

export class Assertions {
    public page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async verifyElementHaveText(element: string, text: string): Promise<void> {
        await expect(this.page.locator(element)).toHaveText(text);
    }

    async verifyElementHaveAttribute(element: string, attrName: string, attrValue: string): Promise<void> {
        await expect(this.page.locator(element)).toHaveAttribute(attrName, attrValue);
    }

    async verifyElementIsVisible(element: string): Promise<void> {
        await expect(this.page.locator(element)).toBeVisible();
    }

    async verifyElementIsPresent(element: string): Promise<void> {
        await expect(this.page.locator(element)).toBeTruthy();
    }

    async verifyElementIsEnabled(element: string): Promise<void> {
        await expect(this.page.locator(element)).toBeEnabled();
    }

    async verifyPageUrl(pageUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async verifyPageTitle(titleName: string): Promise<void> {
        await expect(this.page).toHaveTitle(titleName);
    }
}
