import { render, screen } from "@testing-library/react";
import PortfolioPage from "@/app/portfolio/page";

describe("PortfolioPage", () => {
  it("renders the heading and project card", () => {
    render(<PortfolioPage />);

    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Mars Rover Kata" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Mars Rover Kata thumbnail" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.getAllByText("TypeScript")[0]).toBeInTheDocument();
    expect(
      screen.getByText("Problem/Solution summary placeholder."),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Repo" })[0],
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Demo" })[0],
    ).toBeInTheDocument();
  });
});
