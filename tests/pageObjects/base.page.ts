import { Page } from "@playwright/test";
import { Actions } from '../helper/actions';
import { Assertions } from '../helper/assertions';
import { Waiters } from "../helper/waiters";

export class BasePage {
    public actions;
    public assertions;
    public waiters;
    
    constructor(page: Page) {
        this.actions = new Actions(page);
        this.assertions = new Assertions(page);
        this.waiters = new Waiters(page);
    }
}
