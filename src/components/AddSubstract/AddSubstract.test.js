import AddSubstract from "./AddSubstract";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@storybook/testing-library";

const onAdd = (newCount) => {
  console.log(onAdd);
};

const onSubstract = (newCount) => {
  console.log(onSubstract);
};

describe("Test AddSubstract component", () => {
  it("Should increment and decrement the counter", () => {
    render(
      <AddSubstract
        variant={"secondary"}
        initialCount={0}
        limitCount={10}
        onAdd={onAdd}
        onSubstract={onSubstract}
      />
    );
    const initialCount = screen.getByText("0");
    expect(initialCount).toBeInTheDocument();
    const incrementButton = screen.getByText("+", { selector: "button" });
    fireEvent.click(incrementButton);
    expect(initialCount).toHaveTextContent("1");
    const decrementButton = screen.getByText("-", { selector: "button" });
    fireEvent.click(decrementButton);
    expect(initialCount).toHaveTextContent("0");
  });
});
