import { test, expect, chromium } from '@playwright/test';

test('click Show taskpane button', async ({ }) => {
  const context = await chromium.launch({ headless: false })
  const page = await context.newPage()
  await page.goto('path/To/An Empty Excel file');
  await page.pause()
  //  upload manifest file
  await expect(page.getByRole("button").filter({ hasText: "Taskpane" })).toBeHidden()
  await page.getByRole("button").filter({ hasText: "Taskpane" }).click({ force: true })
});


