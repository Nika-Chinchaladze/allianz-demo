import { Page } from "@playwright/test";

export class Actions {
    public page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async clickOnElement(element: string): Promise<void> {
        await this.page.locator(element).click();
    }

    async setValueInField(element: string, text: string) {
        await this.page.fill(element, text);
    }

    async selectDropDownList(element: string, text: string) {
        await this.page.selectOption(element, text);
    }

    async moveToElement(element: string): Promise<void> {
        try {
            const target = this.page.locator(element);
            await target.scrollIntoViewIfNeeded();
        } catch (error) {
            console.log(error);
        }
    }

    async scrollDown(): Promise<void> {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    async setToken(myToken: string): Promise<void> {
        await this.page.evaluate((token) => {
            const idToken = { token: token };
            localStorage.setItem('idToken', JSON.stringify(idToken));
        }, myToken);
        await this.page.reload();
    }
}
