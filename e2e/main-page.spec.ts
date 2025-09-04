import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe(`Main page top bar`, () => {
  test('should have header text', async ({ page }) => {
    await expect(page.getByRole(`banner`)).toContainText(`Portfolio – Radosław Nagiel`);
  });

  test('the search button allows to find the project', async ({ page }) => {
    await page
      .getByRole(`button`, {
        name: `Wyszukaj projekt`,
      })
      .click();

    await page.getByRole(`textbox`).fill(`PORTFOLIO`);

    await page.waitForTimeout(300);

    const projects = await page.getByRole(`article`);
    expect((await projects.all()).length).toBe(1);

    await page.getByRole(`button`, { name: `Anuluj wyszukanie` }).click();

    await page.waitForTimeout(300);
    expect((await projects.all()).length).toBeGreaterThan(1);
  });

  test(`the theme button allows to change the theme`, async ({ page }) => {
    await page.getByRole(`button`, { name: `Zmień motyw` }).click();

    const html = await page.locator('html');
    expect(html).toHaveAttribute('class', 'ion-palette-dark');

    await page.getByRole(`button`, { name: `Zmień motyw` }).click();
    expect(html).not.toHaveAttribute('class', 'ion-palette-dark');
  });

  test(`language buttons allows to change the page language`, async ({ page }) => {
    await page.getByRole(`radio`, { name: `EN` }).click();
    await page.waitForTimeout(100);
    await expect((await page.getByText(`Private`).all()).length).toBeGreaterThan(0);
    await expect((await page.getByText(`Prywatny`).all()).length).toBe(0);

    await page.getByRole(`radio`, { name: `PL` }).click();
    await page.waitForTimeout(100);
    await expect((await page.getByText(`Prywatny`).all()).length).toBeGreaterThan(0);
    await expect((await page.getByText(`Private`).all()).length).toBe(0);
  });
});
