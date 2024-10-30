import { test as base } from '@playwright/test';
import { ClaimPage } from '../pageObjects/claim.page';

type MyFixtures = {
  claimPage: ClaimPage;
};

export const test = base.extend<MyFixtures>({
  claimPage: async ({ page }, use) => {
    await use(new ClaimPage(page));
  },
});

export { expect } from '@playwright/test';

export function step(stepName?: string) {
  return function decorator(
    target: (...args: unknown[]) => unknown,
    context: ClassMethodDecoratorContext
  ): (...args: unknown[]) => Promise<void> {
    return async function replacementMethod(this: unknown, ...args: unknown[]): Promise<void> {
      if (typeof this === 'object' && this !== null && 'constructor' in this) {
        const name: string = stepName || `${(this as { constructor: { name: string } }).constructor.name}.${String(context.name)}`;

        await test.step(name, async () => {
          await target.apply(this, args);
        });
      } else {
        throw new Error("Invalid context for 'this'");
      }
    };
  };
}
