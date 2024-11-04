import { Locator } from '@playwright/test';
import { hydrated, step } from '../fixtures/base';
import { BasePage } from './base.page';

export class ClaimPage extends BasePage {
  public name: string = 'Claim Page';

  public policyNumberInput: Locator =
    this.locators.getElementByXpath('//input');
  public continueBtn: Locator = this.locators.getElementByXpath(
    '//span[contains(text(), "Continue")]',
  );
  public title: Locator = this.locators.getElementByXpath(
    '//h1[contains(text(), "Claim type")]',
  );
  public verification: Locator = this.locators.getElementByXpath(
    '//div[contains(@class, "policy-number-form")]//span[text()="Verification"]',
  );

  @step('synchronous method')
  justForDemonstration() {
    return 'I am synchronous function...';
  }

  @step('navigate to claim page - async')
  @hydrated()
  async navigateToClaimPage(): Promise<void> {
    this.justForDemonstration();
    await this.actions.goto(this.baseUrl);
    await this.assertions.verifyPageUrl(this.baseUrl);
  }

  @step('provide policy id info - async')
  @hydrated()
  async providePolicyId(): Promise<void> {
    await this.actions.setValueInField(
      this.policyNumberInput,
      process.env.POLICY_ID as string,
    );
    await this.actions.clickOnElement(this.continueBtn);
    await this.assertions.verifyPageUrl(this.baseUrl);
  }

  @step('validate that user is transfered to personal claim page - async')
  @hydrated()
  async checkUserIsTransferred(): Promise<void> {
    await this.assertions.verifyPageUrl(this.baseUrl);
    const final = this.title.or(this.verification);
    await this.assertions.verifyElementIsVisible(final);
  }
}
