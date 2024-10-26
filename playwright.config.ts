import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    httpCredentials: {
      username: 'altair',
      password: '123123'
    },
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  workers: 1,
  projects: [
    { 
      name: 'setup',
      testMatch: /.*\.setup\.ts/ 
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/user.json', },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], storageState: 'playwright/.auth/user.json', },
      dependencies: ['setup'],
    }
  ],
});
