import { render, screen } from "@testing-library/react";
import PortfolioPage from "@/app/portfolio/page";

const mockGet = jest.fn();

jest.mock("../../../lib/firebase/firebaseAdmin", () => ({
  db: {
    collection: jest.fn(() => ({
      get: mockGet,
    })),
  },
}));

describe("PortfolioPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the heading and project card with repo and demo link", async () => {
    mockGet.mockResolvedValueOnce({
      docs: [
        {
          id: "mars-rover-kata",
          data: () => ({
            title: "Mars Rover Kata",
            tags: ["Java", "TypeScript"],
            summary: "Problem/Solution summary placeholder.",
            repoLink: "https://github.com/repo",
            demoLink: "https://demo.com",
            imageSrc: "/hiking.png",
            imageAlt: "Mars Rover Kata thumbnail",
          }),
        },
      ],
    });

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

    expect(screen.getByRole("link", { name: "Repo" })).toHaveAttribute(
      "href",
      "https://github.com/repo",
    );
    expect(screen.getByRole("link", { name: "Demo" })).toHaveAttribute(
      "href",
      "https://demo.com",
    );
    expect(
      screen.queryByRole("link", { name: "Docs" }),
    ).not.toBeInTheDocument();
  });

  it("renders the project card with docs link instead of demo link", async () => {
    mockGet.mockResolvedValueOnce({
      docs: [
        {
          id: "mars-rover-kata",
          data: () => ({
            title: "Mars Rover Kata",
            tags: ["Java", "TypeScript"],
            summary: "Problem/Solution summary placeholder.",
            repoLink: "https://github.com/repo",
            docsLink: "https://docs.com",
          }),
        },
      ],
    });

    const ResolvedPage = await PortfolioPage();
    render(ResolvedPage);

    expect(screen.getByRole("link", { name: "Repo" })).toHaveAttribute(
      "href",
      "https://github.com/repo",
    );
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute(
      "href",
      "https://docs.com",
    );
    expect(
      screen.queryByRole("link", { name: "Demo" }),
    ).not.toBeInTheDocument();
  });

  it("renders only the repo link if no demo or docs link is provided", async () => {
    mockGet.mockResolvedValueOnce({
      docs: [
        {
          id: "mars-rover-kata",
          data: () => ({
            title: "Mars Rover Kata",
            tags: ["Java"],
            summary: "Problem/Solution summary placeholder.",
            repoLink: "https://github.com/repo",
          }),
        },
      ],
    });

    const ResolvedPage = await PortfolioPage();
    render(ResolvedPage);

    expect(screen.getByRole("link", { name: "Repo" })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Demo" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Docs" }),
    ).not.toBeInTheDocument();
  });
});
