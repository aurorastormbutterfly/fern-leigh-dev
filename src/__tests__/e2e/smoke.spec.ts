import { test, expect } from "@playwright/test";

const routes = ["/", "/about", "/experience", "/portfolio"];

test.describe("Smoke Test - Application Layout", () => {
  for (const route of routes) {
    test(`should render the RootLayout elements successfully on ${route}`, async ({
      page,
    }) => {
      // 1. Navigate to the specific route
      await page.goto(`http://localhost:3000${route}`);

      // 2. Verify the header (which has the implicit ARIA role of 'banner') is visible
      const header = page.getByRole("banner");
      await expect(header).toBeVisible();

      // 3. Verify the logo from your RootLayout is present using its alt text
      await expect(page.getByAltText(/Fern Leigh Dev/i)).toBeVisible();

      // 4. Verify the <main> content area is visible
      const main = page.getByRole("main");
      await expect(main).toBeVisible();
    });
  }
});
