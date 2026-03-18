import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

describe("ProjectCard", () => {
  it("renders the project card with given props", () => {
    render(
      <ProjectCard
        title="Test Project"
        tags={["React", "Jest"]}
        summary="A test project summary."
        repoLink="https://github.com/test/repo"
        demoLink="https://test-demo.com"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Test Project" }),
    ).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Jest")).toBeInTheDocument();
    expect(screen.getByText("A test project summary.")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Repo" })).toHaveAttribute(
      "href",
      "https://github.com/test/repo",
    );
    expect(screen.getByRole("link", { name: "Demo" })).toHaveAttribute(
      "href",
      "https://test-demo.com",
    );
  });

  it("renders an image when imageSrc is provided", () => {
    render(
      <ProjectCard
        title="Image Project"
        tags={["React"]}
        summary="A project with an image."
        imageSrc="/test-image.png"
        imageAlt="Test Image Alt"
      />,
    );

    const img = screen.getByRole("img", { name: "Test Image Alt" });
    expect(img).toBeInTheDocument();
  });
});
