import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('has correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Stowaway/);
  });

  test('hero heading is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Zero-dependency E2E testing/ })).toBeVisible();
  });

  test('Get Started CTA navigates to getting-started doc', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Get Started/ }).first().click();
    await expect(page).toHaveURL(/getting-started/);
  });

  test('Docs nav link is present in navbar', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Docs', exact: true })).toBeVisible();
  });
});
