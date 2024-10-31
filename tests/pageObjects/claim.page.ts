import { step } from '../fixtures/base';
import { BasePage } from './base.page';

export class ClaimPage extends BasePage {
  public name: string = 'Claim Page';
  public policyNumberInput: string = '//input';
  public continueBtn: string = '//span[contains(text(), "Continue")]';
  public title: string = '//h1[contains(text(), "Claim type")]';

  // @step('asd') // modify this to work with sync functions
  // policy(): string {
  //   return 'information';
  // }

  // the name of method
  // steps - o when we use step without argument string than it should include method name and pom class name
  // modify step it to work with sync and async functions
  @step()
  async navigate(): Promise<void> {
    await this.actions.goto(this.baseUrl);
    await this.waiters.waitForUrl(this.baseUrl, 5000);
  }

  @step()
  async fillValues(): Promise<void> {
    await this.actions.setValueInField(
      this.policyNumberInput,
      process.env.POLICY_ID as string,
    );
    await this.actions.clickOnElement(this.continueBtn);
    await this.waiters.waitForUrl(this.baseUrl, 5000);
  }

  @step()
  async checkState(): Promise<void> {
    await this.waiters.waitForSelector(this.title, 15000);
    await this.assertions.verifyPageUrl(this.baseUrl);
  }
}
