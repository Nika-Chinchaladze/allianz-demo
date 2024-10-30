import { Page } from '@playwright/test';
import { Actions } from '../helper/actions';
import { Assertions } from '../helper/assertions';
import { Waiters } from '../helper/waiters';

export class BasePage {
  public actions;
  public assertions;
  public waiters;
  public urlMap: { dev: string; uat: string } = {
    dev: process.env.DEV_BASE_URL as string,
    uat: process.env.UAT_BASE_URL as string,
  };
  public baseUrl: string =
    this.urlMap[(process.env.ENV as 'dev' | 'uat') || 'dev'];

  constructor(page: Page) {
    this.actions = new Actions(page);
    this.assertions = new Assertions(page);
    this.waiters = new Waiters(page);
  }
}
