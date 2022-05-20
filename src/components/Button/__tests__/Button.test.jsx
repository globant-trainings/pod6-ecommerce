import Button from '../Button';
import { render, screen, fireEvent } from '@testing-library/react';
//aaa
describe('<Button/>', () => {
  test('Should has the correct class names when is marked as primary button', () => {
    //arrange
    render(<Button children="Something" variant="primary" />);

    //act
    let btn = screen.getByText("Something");

    //assert
    expect(btn.className).toBe(" Button btn--primary ")
  });

  test('Should has the correct class names when is marked as secondary button', () => {
    render(<Button children="Something" variant="secondary" />);

    let btn = screen.getByText("Something");

    expect(btn.className).toBe(" Button btn--secondary ")
  });

  test('Should propagate the click event to its parent', () => {
    let spy = jest.fn();
    render(<Button children="Something" variant="secondary" onClick={spy} />);
    
    let btn = screen.getByText("Something");

    fireEvent.click(btn);

    expect(spy).toHaveBeenCalled();
  });

  test('Should change the state of a button to disabled', () => {
    render(<Button children="Something" variant="secondary" disabled={true} />);

    let btn = screen.getByText("Something");

    expect(btn).toMatchSnapshot('Check disabled status');
  });

  test('Should change the text inside the button', () => {
    let { rerender } = render(<Button children="Something" variant="primary" />);
 
    let btn = screen.getByText("Something");

    rerender(<Button children={"Something else"} variant="primary" />);

    expect(btn.textContent).toBe("Something else");
  });

});