import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    httpCredentials: {
      username: `${process.env.USERNAME}`,
      password: `${process.env.PASSWORD}`
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
    // {
    //   name: 'Mobile-Android',
    //   use: { browserName: 'chromium', ...devices['Pixel 7'] },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'Mobile-Iphone',
    //   use: { browserName: 'chromium', ...devices['iPhone 14 Pro Max'] },
    //   dependencies: ['setup'],
    // }
  ],
});
