import { expect, test } from '@playwright/test';

test.describe(`Main page`, () => {
  test('should have header text', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole(`banner`)).toContainText(
      `Portfolio – Radosław Nagiel`
    );
  });
});
