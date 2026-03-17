import { render, screen, fireEvent } from "@testing-library/react";
import FlipCard from "./FlipCard";

describe("FlipCard", () => {
  it("renders the title", () => {
    render(<FlipCard title="Test Title" details="Test Details" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("flips when clicked", () => {
    render(<FlipCard title="Test Title" details="Test Details" />);
    const flipCard = screen.getByText("Test Title").closest("div.flipCard");
    if (flipCard) {
      fireEvent.click(flipCard);
      expect(flipCard.querySelector(".isFlipped")).toBeInTheDocument();
    }
  });

  it("shows the details after flipping", () => {
    render(<FlipCard title="Test Title" details="Test Details" />);
    const flipCard = screen.getByText("Test Title").closest("div.flipCard");
    if (flipCard) {
      fireEvent.click(flipCard);
      expect(screen.getByText("Test Details")).toBeInTheDocument();
    }
  });

  it("renders an image when provided", () => {
    const image = {
      src: "/lily.png",
      alt: "A cartoon of a smiling dog with floppy ears, with the text 'Lily The Dog'",
    };
    render(
      <FlipCard title="Test Title" details="Test Details" image={image} />,
    );
    const img = screen.getByAltText(image.alt);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", image.src);
  });
});
