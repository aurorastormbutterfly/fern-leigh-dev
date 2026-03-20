import { render, screen } from "@testing-library/react";
import ExperiencePage from "../../../app/experience/page";
import { experiences } from "../../../app/experience/data";

jest.mock("../../../app/experience/data", () => ({
  experiences: [
    {
      company: "Test Company 1",
      location: "Test Location 1",
      role: "Test Role 1",
      duration: "2022 - 2023",
      details: {
        duties: ["Test Duty 1"],
        projects: ["Test Project 1"],
        skills: ["Test Skill 1"],
      },
    },
    {
      company: "Test Company 2",
      location: "Test Location 2",
      role: "Test Role 2",
      duration: "2023 - 2024",
      details: {
        duties: ["Test Duty 2"],
        projects: ["Test Project 2"],
        skills: ["Test Skill 2"],
      },
    },
  ],
}));

describe("ExperiencePage", () => {
  it("renders the heading and download button", () => {
    render(<ExperiencePage />);

    expect(
      screen.getByRole("heading", { name: "Professional Experience" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Download CV" }),
    ).toBeInTheDocument();
  });

  it("renders the experience cards", () => {
    render(<ExperiencePage />);

    expect(screen.getByText("Test Role 1")).toBeInTheDocument();
    expect(screen.getByText("Test Role 2")).toBeInTheDocument();
  });
});
