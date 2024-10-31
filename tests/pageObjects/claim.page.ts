import { step } from '../fixtures/base';
import { BasePage } from './base.page';

export class ClaimPage extends BasePage {
  public name: string = 'Claim Page';
  public policyNumberInput: string = '//input';
  public continueBtn: string = '//span[contains(text(), "Continue")]';
  public title: string = '//h1[contains(text(), "Claim type")]';

  @step('synchronous method') // sync method
  justForDemonstration() {
    return 'I am synchronous function...';
  }

  @step('navigate to claim page - async') // async method
  async navigateToClaimPage(): Promise<void> {
    this.justForDemonstration();
    await this.actions.goto(this.baseUrl);
    await this.waiters.waitForUrl(this.baseUrl, 5000);
  }

  @step('provide policy id info - async')
  async providePolicyId(): Promise<void> {
    this.justForDemonstration();
    await this.actions.setValueInField(
      this.policyNumberInput,
      process.env.POLICY_ID as string,
    );
    await this.actions.clickOnElement(this.continueBtn);
    await this.waiters.waitForUrl(this.baseUrl, 5000);
  }

  @step('validate that user is transfered to personal claim page - async')
  async checkUserIsTransferred(): Promise<void> {
    this.justForDemonstration();
    await this.waiters.waitForSelector(this.title, 15000);
    await this.assertions.verifyPageUrl(this.baseUrl);
  }
}
