import { test, expect } from "@playwright/test";

const routes = ["/", "/about", "/experience", "/portfolio"];

test.describe("Smoke Test - Application Layout", () => {
  for (const route of routes) {
    test(`should render the RootLayout elements successfully on ${route}`, async ({
      page,
    }) => {
      // 1. Navigate to the specific route
      await page.goto(route);

      // 2. Wait for the main content area to be visible, to ensure the page is loaded
      const main = page.getByRole("main");
      await expect(main).toBeVisible();

      // 3. Verify the header (which has the implicit ARIA role of 'banner') is visible
      const header = page.getByRole("banner");
      await expect(header).toBeVisible();

      // 4. Verify the logo from your RootLayout is present using its alt text
      await expect(page.getByAltText(/Fern Leigh Dev/i)).toBeVisible();
    });
  }
});
