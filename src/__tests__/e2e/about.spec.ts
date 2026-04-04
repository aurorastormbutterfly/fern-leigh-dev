import { test, expect } from "@playwright/test";
import { AboutPage, type Card } from "./poms/AboutPage.pom";

test.describe("About Page", () => {
  let aboutPage: AboutPage;

  test.beforeEach(async ({ page }) => {
    aboutPage = new AboutPage(page);
    await aboutPage.goto();
  });

  test("should display the main heading and introductory text", async () => {
    await expect(aboutPage.heading).toBeVisible();
    await expect(aboutPage.introParagraph).toBeVisible();
  });

  const cards = [
    { name: "Quality", cardKey: "qualityCard" },
    { name: "Engineering", cardKey: "engineeringCard" },
    { name: "Accessibility", cardKey: "accessibilityCard" },
    { name: "Outside IDE", cardKey: "outsideIdeCard" },
  ] as const;

  for (const { name, cardKey } of cards) {
    test(`should have clickable ${name} flip card`, async () => {
      const card = aboutPage[cardKey];

      // Initial state: not flipped
      await expect(card.front).toHaveAttribute("aria-hidden", "false");
      await expect(card.back).toHaveAttribute("aria-hidden", "true");
      await expect(card.inner).not.toHaveClass(/isFlipped/);

      // Flip the card
      await card.flip();

      // Flipped state
      await expect(card.front).toHaveAttribute("aria-hidden", "true");
      await expect(card.back).toHaveAttribute("aria-hidden", "false");
      await expect(card.inner).toHaveClass(/isFlipped/);

      // Flip the card back
      await card.flip();

      // Back to initial state
      await expect(card.front).toHaveAttribute("aria-hidden", "false");
      await expect(card.back).toHaveAttribute("aria-hidden", "true");
      await expect(card.inner).not.toHaveClass(/isFlipped/);
    });
  }
});
