import { step } from '../fixtures/base';
import { BasePage } from './base.page';

export class ClaimPage extends BasePage {
  public policyNumberInput: string = '//input';
  public continueBtn: string = '//span[contains(text(), "Continue")]';
  public title: string = '//h1[contains(text(), "Claim type")]';

  @step('Navigate to /claims page')
  async navigate(): Promise<void> {
    await this.actions.goto(this.baseUrl);
    await this.waiters.waitForUrl(this.baseUrl, 5000);
  }

  @step('Fill beneficiary data')
  async fillValues(): Promise<void> {
    await this.actions.setValueInField(
      this.policyNumberInput,
      process.env.POLICY_ID as string,
    );
    await this.actions.clickOnElement(this.continueBtn);
    await this.waiters.waitForUrl(this.baseUrl, 5000);
  }

  @step('Make sure that user is transfered to personal claims page')
  async checkState(): Promise<void> {
    await this.waiters.waitForSelector(this.title, 15000);
    await this.assertions.verifyPageUrl(this.baseUrl);
  }
}
