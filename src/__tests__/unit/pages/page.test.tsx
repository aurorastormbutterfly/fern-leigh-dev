import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the hero section", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "Hi, I'm Fern Leigh." }),
    ).toBeInTheDocument();
  });

  it("renders the bento grid cards with correct links", () => {
    render(<HomePage />);

    // Enterprise Experience
    expect(
      screen.getByRole("heading", { name: "Enterprise Experience" }),
    ).toBeInTheDocument();

    // Engineering Lab
    expect(
      screen.getByRole("heading", { name: "The Engineering Lab" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Explore the Lab/i }),
    ).toHaveAttribute("href", "/portfolio");

    // Core Expertise
    expect(
      screen.getByRole("heading", { name: "Core Expertise" }),
    ).toBeInTheDocument();

    // Insights & Writing
    expect(
      screen.getByRole("heading", { name: "Insights & Writing" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Find me on LinkedIn/i }),
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/fern-leigh-c-666b4657/",
    );

    // View the Source
    expect(
      screen.getByRole("heading", { name: "View the Source" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /GitHub Profile/i }),
    ).toHaveAttribute("href", "https://github.com/aurorastormbutterfly");
  });
});
