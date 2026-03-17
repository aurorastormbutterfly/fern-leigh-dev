import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the hero section", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "Welcome to my Portfolio" }),
    ).toBeInTheDocument();
  });
});
