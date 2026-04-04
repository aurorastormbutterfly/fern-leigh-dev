import { expect, type Page } from "@playwright/test";

export const verifyAllLinks = async (page: Page) => {
  const links = await page.getByRole("link").all();

  for (const link of links) {
    const href = await link.getAttribute("href");

    // Skip empty links, anchor links, and email links
    if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
      continue;
    }

    const response = await page.request.get(href);
    const status = response.status();

    const isSuccessful = response.ok();
    const isBotBlocked = status === 403 || status === 999;

    expect(
      isSuccessful || isBotBlocked,
      `Broken link detected: ${href} (Status: ${status})`,
    ).toBe(true);
  }
};

export const verifyAllButtons = async (page: Page) => {
  const buttons = await page.getByRole("button").all();
  for (const button of buttons) {
    await expect(button).toBeEnabled();
  }
};
