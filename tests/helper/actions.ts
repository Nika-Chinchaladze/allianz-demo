import { expect, Page } from '@playwright/test';

export class Actions {
  public page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    try {
      await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    } catch (error) {
      console.error(`Error navigating to "${url}":`, error);
      throw error;
    }
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async clickOnElement(element: string) {
    const btn = this.page.locator(element);
    try {
      const count = await btn.count();
      if (count === 0) {
          throw new Error(`Element "${element}" does not exist.`);
      }
      await expect(btn).toBeVisible();
      await expect(btn).toBeEnabled();
      await btn.waitFor({ state: 'attached' });
      await btn.click();
    } catch (error) {
      console.error(`Error clicking on element "${element}:"`, error);
      throw error;
    }
  }

  async setValueInField(element: string, text: string) {
    const input = this.page.locator(element);
    try {
      const count = await input.count();
      if (count === 0) {
          throw new Error(`Input element "${element}" does not exist.`);
      }
      expect(input).toBeTruthy();
      await expect(input).toBeVisible();
      await expect(input).toBeEnabled();
      await expect(input).toBeFocused();
      await input.fill('');
      await input.fill(text);
    } catch (error) {
      console.error(`Error setting value in input element "${element}:"`, error);
      throw error;
    }
  }

  async selectDropDownList(element: string, text: string) {
    const dropdown = this.page.locator(element);
    try {
      const count = await dropdown.count();
      if (count === 0) {
          throw new Error(`Element "${element}" does not exist.`);
      }
      await expect(dropdown).toBeVisible();
      await expect(dropdown).toBeEnabled();
      await dropdown.selectOption({ label: text });
    } catch (error) {
      console.error(`Error selecting option "${text}" from dropdown "${element}":`, error);
      throw error;
    }
  }

  async moveToElement(element: string): Promise<void> {
    const target = this.page.locator(element);
    try {
      const count = await target.count();
      if (count === 0) {
          throw new Error(`Element "${element}" does not exist.`);
      }
      await expect(target).toBeVisible();
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
    await this.page.evaluate(token => {
      const idToken = { token: token };
      localStorage.setItem('idToken', JSON.stringify(idToken));
    }, myToken);
    await this.page.reload();
  }
}
