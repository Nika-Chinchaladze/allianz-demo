import { Page, Locator } from '@playwright/test';

export class Locators {
  public page;
  public name: string = 'Locators Class';

  constructor(page: Page) {
    this.page = page;
  }

  getElementByRole(
    role: 'alert' | 'button' | 'dialog' | 'checkbox',
    name: string,
  ): Locator {
    return this.page.getByRole(role, { name: name });
  }

  getElementByLabel(label: string): Locator {
    return this.page.getByLabel(label);
  }

  getElementByPlaceholder(placeholder: string): Locator {
    return this.page.getByPlaceholder(placeholder);
  }

  getElementByText(text: string): Locator {
    return this.page.getByText(text);
  }

  getElementByAltText(altText: string): Locator {
    return this.page.getByAltText(altText);
  }

  getElementByTitle(title: string): Locator {
    return this.page.getByTitle(title);
  }

  getElementByTestId(testid: string): Locator {
    return this.page.getByTestId(testid);
  }

  getElementByCSS(selector: string): Locator {
    return this.page.locator(`css=${selector}`);
  }

  getElementByXpath(xpath: string): Locator {
    return this.page.locator(`xpath=${xpath}`);
  }
}
