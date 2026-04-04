import { expect, type Page, type Locator } from "@playwright/test";
import { experiences } from "../../../app/experience/data";

export class ExperienceCard {
  readonly root: Locator;
  readonly toggleButton: Locator;
  readonly details: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.toggleButton = root.locator("button");
    this.details = root.locator('[class*="detailsBody"]');
  }

  async toggle() {
    await this.toggleButton.click();
  }

  async expectCollapsed() {
    await expect(this.details).toBeHidden();
    await expect(this.toggleButton).toHaveAttribute("aria-expanded", "false");
  }

  async expectExpanded() {
    await expect(this.details).toBeVisible();
    await expect(this.toggleButton).toHaveAttribute("aria-expanded", "true");
  }

  async expectContentVisible(text: string) {
    await expect(this.details).toContainText(text);
  }
}

export class ExperiencePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly experienceCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", {
      name: "Professional Experience",
    });
    this.experienceCards = page.locator("article");
  }

  async goto() {
    await this.page.goto("/experience");
  }

  getCard(company: string, role: string) {
    const cardLocator = this.experienceCards
      .filter({ has: this.page.getByRole("heading", { name: role }) })
      .filter({ hasText: company });

    return new ExperienceCard(cardLocator);
  }

  static getCardData() {
    return experiences.map((exp) => ({
      name: `${exp.role} at ${exp.company}`,
      company: exp.company,
      role: exp.role,
      duties: exp.details.duties,
      projects: exp.details.projects,
      skills: exp.details.skills,
    }));
  }
}
