import { test, expect } from '@playwright/test';

const DOC_PAGES = [
  { path: '/docs/getting-started', heading: 'Getting Started' },
  { path: '/docs/querying', heading: 'Querying Elements' },
  { path: '/docs/interactions', heading: 'Interactions' },
  { path: '/docs/assertions', heading: 'Assertions' },
  { path: '/docs/test-organisation', heading: 'Test Organisation' },
  { path: '/docs/network-mocking', heading: 'Network Mocking' },
  { path: '/docs/results', heading: 'Results & CI' },
];

for (const { path, heading } of DOC_PAGES) {
  test(`${heading} page loads`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole('heading', { name: heading, level: 1 })).toBeVisible();
  });
}

test('docs sidebar is visible on doc pages', async ({ page }) => {
  await page.goto('/docs/getting-started');
  await expect(page.locator('.theme-doc-sidebar-container')).toBeVisible();
});
