import { expect, type Page, type Locator } from "@playwright/test";

export class Navigation {
  readonly page: Page;
  readonly themeToggle: Locator;
  readonly openMenuButton: Locator;
  readonly closeMenuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.themeToggle = page.getByRole("button", { name: /toggle theme/i });
    this.openMenuButton = page.getByRole("button", {
      name: /open navigation menu/i,
    });
    this.closeMenuButton = page.getByRole("button", {
      name: /close navigation menu/i,
    });
  }

  async toggleTheme() {
    await this.themeToggle.click();
  }

  async toggleMobileMenu() {
    // If the menu is open, click close; otherwise click open.
    await (
      (await this.closeMenuButton.isVisible())
        ? this.closeMenuButton
        : this.openMenuButton
    ).click();
  }

  getNavLink(name: string) {
    return this.page.getByRole("link", { name, exact: true });
  }

  async navigateTo(name: string, isMobile: boolean = false) {
    if (isMobile) {
      await this.toggleMobileMenu();
    }
    await this.getNavLink(name).click();
  }

  async expectToBeOnPage(url: string) {
    // Use a stricter regex for the Home route to avoid false positive matches
    const urlPattern = url === "/" ? /.*\/$/ : new RegExp(url, "i");
    await expect(this.page).toHaveURL(urlPattern);

    // Wait for the document title to be non-empty (resolves Next.js hydration/routing race conditions)
    await expect(this.page).toHaveTitle(/.+/);
  }

  async expectTheme(theme: "light" | "dark") {
    await expect(this.page.locator("html")).toHaveAttribute(
      "data-theme",
      theme,
    );
  }

  async expectMenuOpen() {
    await expect(this.getNavLink("Home")).toBeVisible();
    await expect(this.getNavLink("About Me")).toBeVisible();
    await expect(this.getNavLink("Professional Experience")).toBeVisible();
    await expect(this.getNavLink("Portfolio")).toBeVisible();
    await expect(this.closeMenuButton).toBeVisible();
  }

  async expectMenuClosed() {
    await expect(this.getNavLink("Home")).toBeHidden(); // Ensure transitioning elements are accounted for natively
    await expect(this.getNavLink("About Me")).toBeHidden();
    await expect(this.getNavLink("Professional Experience")).toBeHidden();
    await expect(this.getNavLink("Portfolio")).toBeHidden();
    await expect(this.openMenuButton).toBeVisible();
  }
}
