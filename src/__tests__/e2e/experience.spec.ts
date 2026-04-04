import { test, expect } from "@playwright/test";
import { ExperiencePage, type ExperienceCard } from "./poms/ExperiencePage.pom";

test.describe("Experience Page", () => {
  let experiencePage: ExperiencePage;

  test.beforeEach(async ({ page }) => {
    experiencePage = new ExperiencePage(page);
    await experiencePage.goto();
  });

  test("should display the main heading and all experience cards", async () => {
    await expect(experiencePage.heading).toBeVisible();

    const expectedCardCount = ExperiencePage.getCardData().length;
    await expect(experiencePage.experienceCards).toHaveCount(expectedCardCount);
  });

  const getUpperAndLowerCards = () => {
    const [upperCardData, lowerCardData] = ExperiencePage.getCardData();
    return {
      upperCard: experiencePage.getCard(
        upperCardData.company,
        upperCardData.role,
      ),
      lowerCard: experiencePage.getCard(
        lowerCardData.company,
        lowerCardData.role,
      ),
    };
  };

  const getCardBoundary = async (card: ExperienceCard) => {
    const boundary = await card.root.boundingBox();
    expect(boundary).not.toBeNull();
    return boundary!;
  };

  const allCards = ExperiencePage.getCardData();
  const firstCard = allCards[0];
  const lastCard = allCards[allCards.length - 1];
  const cardsToTest = [firstCard, lastCard];

  for (const {
    name,
    company,
    role,
    duties = [],
    projects = [],
    skills = [],
  } of cardsToTest) {
    test(`should correctly open and close the ${name} card`, async () => {
      const card = experiencePage.getCard(company, role);

      await expect(card.details).toBeHidden();
      await expect(card.toggleButton).toHaveAttribute("aria-expanded", "false");

      await card.toggle();
      await expect(card.details).toBeVisible();
      await expect(card.toggleButton).toHaveAttribute("aria-expanded", "true");

      // Verify content renders inside the details pane
      for (const duty of duties) {
        await expect(card.details).toContainText(duty);
      }
      for (const project of projects) {
        await expect(card.details).toContainText(project);
      }
      for (const skill of skills) {
        await expect(card.details).toContainText(skill);
      }

      await card.toggle();
      await expect(card.details).toBeHidden();
      await expect(card.toggleButton).toHaveAttribute("aria-expanded", "false");
    });
  }

  test("should not have overlapping cards when one is opened", async () => {
    const { upperCard, lowerCard } = getUpperAndLowerCards();

    await upperCard.toggle();

    const upperCardBoundary = await getCardBoundary(upperCard);
    const lowerCardBoundary = await getCardBoundary(lowerCard);

    const upperCardBottom = upperCardBoundary.y + upperCardBoundary.height;
    const lowerCardTop = lowerCardBoundary.y;

    // Note: Web Y-coordinates start at 0 at the top and increase downwards.
    expect(upperCardBottom).toBeLessThanOrEqual(lowerCardTop);
  });
});
