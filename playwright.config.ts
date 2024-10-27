import * as dotenv from 'dotenv';
dotenv.config();

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
      username: `${process.env.MY_USER_NAME}`,
      password: `${process.env.MY_PASS_WORD}`,
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
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'], storageState: 'playwright/.auth/user.json', },
      dependencies: ['setup'],
    },
    {
      name: 'Mobile-Android',
      use: { browserName: 'chromium', ...devices['Pixel 7'], storageState: 'playwright/.auth/user.json', },
      dependencies: ['setup'],
    },
    {
      name: 'Mobile-Iphone',
      use: { browserName: 'chromium', ...devices['iPhone 14 Pro Max'], storageState: 'playwright/.auth/user.json', },
      dependencies: ['setup'],
    }
  ],
});
