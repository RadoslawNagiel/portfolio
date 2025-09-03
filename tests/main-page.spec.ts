import { expect, test } from '@playwright/test';

test.describe(`Main page`, () => {
  test(`should have header text`, async ({ page }) => {
    await page.goto(`http://localhost:4200/`);
    await expect(page.getByRole(`banner`)).toContainText(
      `Portfolio – Radosław Nagiel`
    );
  });
});
