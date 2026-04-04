import { expect, type Page, type Locator } from "@playwright/test";

export interface Card {
  front: Locator;
  back: Locator;
  inner: Locator;
  flip: () => Promise<void>;
  expectFrontSideUp: () => Promise<void>;
  expectBackSideUp: () => Promise<void>;
}

export class AboutPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly introParagraph: Locator;

  readonly qualityCard: Card;
  readonly engineeringCard: Card;
  readonly accessibilityCard: Card;
  readonly outsideIdeCard: Card;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "About Me" });
    this.introParagraph = page.getByText(
      /I am Fern Leigh Corcoran, a software developer/i,
    );

    this.qualityCard = this.createCard("quality");
    this.engineeringCard = this.createCard("purpose");
    this.accessibilityCard = this.createCard("accessibility");
    this.outsideIdeCard = this.createCard("ide");
  }

  private createCard(testId: string): Card {
    const card = this.page.getByTestId(testId);
    const front = card.getByTestId(`${testId}-front`);
    const back = card.getByTestId(`${testId}-back`);
    const inner = card.getByTestId(`${testId}-inner`);

    return {
      front,
      back,
      inner,
      flip: () => card.click(),
      expectFrontSideUp: async () => {
        await expect(front).toHaveAttribute("aria-hidden", "false");
        await expect(back).toHaveAttribute("aria-hidden", "true");
        await expect(inner).not.toHaveClass(/isFlipped/);
      },
      expectBackSideUp: async () => {
        await expect(front).toHaveAttribute("aria-hidden", "true");
        await expect(back).toHaveAttribute("aria-hidden", "false");
        await expect(inner).toHaveClass(/isFlipped/);
      },
    };
  }

  async goto() {
    await this.page.goto("/about");
  }
}
