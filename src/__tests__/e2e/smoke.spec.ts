import { test } from "@playwright/test";
import { Navigation } from "./poms/Navigation.pom";
import { verifyAllLinks, verifyAllButtons } from "./helpers";

test.describe("Navigation and Clickable Elements", () => {
  const pages = [
    { name: "Home", url: "/" },
    { name: "About Me", url: "/about" },
    { name: "Professional Experience", url: "/experience" },
    { name: "Portfolio", url: "/portfolio" },
  ];

  for (const { name, url } of pages) {
    test(`should navigate to ${name} and have working links and buttons`, async ({
      page,
      isMobile,
    }) => {
      const nav = new Navigation(page);
      await page.goto("/");

      await nav.navigateTo(name, isMobile);
      await nav.expectToBeOnPage(url);

      await verifyAllLinks(page);
      await verifyAllButtons(page);
    });
  }
});

test.describe("Theme Toggle", () => {
  test("should change the theme when the toggle is clicked", async ({
    page,
  }) => {
    const nav = new Navigation(page);
    await page.goto("/");

    await nav.expectTheme("light");
    await nav.toggleTheme();
    await nav.expectTheme("dark");
  });
});

test.describe("Mobile Navigation Menu", () => {
  test("should open and close the menu without navigation", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile only test");

    const nav = new Navigation(page);
    await page.goto("/");

    await nav.toggleMobileMenu();

    await nav.expectMenuOpen();

    await nav.toggleMobileMenu();

    await nav.expectMenuClosed();
  });
});
