import FilterSidebar from '../FilterSidebar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<FilterSidebar/>', () => {
  test('Should render sidebar like design', () => {
    render(<FilterSidebar prices={["$1 - $50", "$51 - $100", "$101 - $200"]} options={["Relevant", "Price", "Rating"]} onChangePrice={(param)=>console.log(param)} onChangeSort={(param)=>console.log(param)} />);

    let sidebar = screen.getByTestId("filters-sidebar");

    expect(sidebar).toMatchSnapshot('Check rendered sidebar to be like design');
  });
  test('Should propagate the click event to its parent', () => {
    let spyPrice = jest.fn();
    let spyOptions = jest.fn();
    render(<FilterSidebar prices={["$1 - $50", "$51 - $100", "$101 - $200"]} options={["Relevant", "Price", "Rating"]} onChangePrice={spyPrice} onChangeSort={spyOptions} />);
    
    let PriceOption = screen.getByTestId("prices-radio-2");

    fireEvent.click(PriceOption);

    expect(spyPrice).toHaveBeenCalled();

    let SortbyOptions = screen.getByTestId("options-select");

    fireEvent.change(SortbyOptions, { target: { value: 2 } })

    expect(spyOptions).toHaveBeenCalled();
  });

});