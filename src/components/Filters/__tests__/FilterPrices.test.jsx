import FilterPrices from '../FilterPrices';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<FilterPrices/>', () => {
  test('Should render three options like design', () => {
    render(<FilterPrices prices={["$1 - $50", "$51 - $100", "$101 - $200"]} onChange={(param)=>console.log(param)} />);

    let prices = screen.getByTestId("prices-radio");

    expect(prices).toMatchSnapshot('Check rendered options to be like design');
  });
  test('Should propagate the click event to its parent', () => {
    let spy = jest.fn();
    render(<FilterPrices prices={["$1 - $50", "$51 - $100", "$101 - $200"]} onChange={spy} />);
    
    let option = screen.getByTestId("prices-radio-2");

    fireEvent.click(option);

    expect(spy).toHaveBeenCalled();
  });

});