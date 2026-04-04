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

      await card.expectFrontSideUp();

      await card.flip();
      await card.expectBackSideUp();

      await card.flip();
      await card.expectFrontSideUp();
    });
  }
});
