import { test, expect } from "@playwright/test";

test.describe("Navigation and Clickable Elements", () => {
  const navLinks = [
    { name: "About Me", url: "/about" },
    { name: "Professional Experience", url: "/experience" },
    { name: "Portfolio", url: "/portfolio" },
  ];

  for (const link of navLinks) {
    test.describe(`Page: ${link.name}`, () => {
      test.beforeEach(async ({ page, isMobile }) => {
        await page.goto("/");
        if (isMobile) {
          await page
            .getByRole("button", { name: /open navigation menu/i })
            .click();
        }
        await page.getByRole("link", { name: link.name, exact: true }).click();
        await expect(page).toHaveURL(new RegExp(link.url, "i"));
      });

      test("should have working links and buttons", async ({ page }) => {
        const links = await page.getByRole("link").all();
        for (const link of links) {
          const href = await link.getAttribute("href");
          if (href && !href.startsWith("#")) {
            const response = await page.request.get(href);
            expect(response.ok()).toBe(true);
          }
        }

        const buttons = await page.getByRole("button").all();
        for (const button of buttons) {
          await expect(button).toBeEnabled();
        }
      });
    });
  }
});

test.describe("Theme Toggle", () => {
  test("should change the theme when the toggle is clicked", async ({
    page,
  }) => {
    await page.goto("/");
    const themeToggle = page.getByRole("button", { name: /toggle theme/i });
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await themeToggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });
});

test.describe("Mobile Navigation Menu", () => {
  test("should open and close the menu without navigation", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile only test");

    await page.goto("/");

    const openMenuButton = page.getByRole("button", {
      name: /open navigation menu/i,
    });
    await openMenuButton.click();

    await expect(
      page.getByRole("link", { name: "Home", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "About Me", exact: true })
    ).toBeVisible();

    const closeMenuButton = page.getByRole("button", {
      name: /close navigation menu/i,
    });
    await expect(closeMenuButton).toBeVisible();

    await closeMenuButton.click();

    await expect(
      page.getByRole("link", { name: "Home", exact: true })
    ).not.toBeVisible();
    await expect(
      page.getByRole("link", { name: "About Me", exact: true })
    ).not.toBeVisible();
    await expect(openMenuButton).toBeVisible();
  });
});
