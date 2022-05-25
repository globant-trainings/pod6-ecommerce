import Carousel from "./Carousel";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@storybook/testing-library";
import { api } from "../../utils/constants";

const ImageData = [
  {
    image: api + "200/300",
  },
  {
    image: api + "200/300?v=1",
  },
  {
    image: api + "200/300?v=2",
  },
];

describe("Test Carousel Component", () => {
  it("Should change image on next button pressed and go back to previous image", () => {
    render(<Carousel imageData={ImageData} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", ImageData[0].image);
    const nextButton = screen.getByText(">", { selector: "button" });
    fireEvent.click(nextButton);
    const image2 = screen.getByRole("img");
    expect(image2).toHaveAttribute("src", ImageData[1].image);
    const backButton = screen.getByText("<", { selector: "button" });
    fireEvent.click(backButton);
    expect(image).toHaveAttribute("src", ImageData[0].image);
  });
});
