import { render, screen } from "@testing-library/react";
import PortfolioPage from "@/app/portfolio/page";

jest.mock("../../../lib/firebase/firebaseAdmin", () => ({
  db: {
    collection: jest.fn(() => ({
      get: jest.fn().mockResolvedValue({
        docs: [
          {
            id: "mars-rover-kata",
            data: () => ({
              title: "Mars Rover Kata",
              tags: ["Java", "TypeScript"],
              summary: "Problem/Solution summary placeholder.",
              repoLink: "#",
              demoLink: "#",
              imageSrc: "/hiking.png",
              imageAlt: "Mars Rover Kata thumbnail",
            }),
          },
        ],
      }),
    })),
  },
}));

describe("PortfolioPage", () => {
  it("renders the heading and project card", async () => {
    // We await the server component before passing it to render
    const ResolvedPage = await PortfolioPage();
    render(ResolvedPage);

    expect(
      screen.getByRole("heading", { name: "Engineering Lab" }),
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
