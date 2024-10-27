import { BasePage } from "./base.page";

export class ClaimPage extends BasePage {
    public baseUrl: string = 'https://altair-dev.allianz-partners.com/claims';
    public policyNumberInput: string = '//input';
    public continueBtn: string = '//span[contains(text(), "Continue")]';
    public title: string = '//h1[contains(text(), "Claim type")]';
}
