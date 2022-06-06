import FilterSortby from '../FilterSortby';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<FilterSortby/>', () => {
  test('Should render three options in a select', () => {
    render(<FilterSortby options={["Relevant", "Price", "Rating"]} onChange={(param)=>console.log(param)} />);

    let options = screen.getByTestId("options-select");

    expect(options).toMatchSnapshot('Check rendered select to represent all options');
  });
  test('Should correctly display selected value', () => {
    render(<FilterSortby options={["Relevant", "Price", "Rating"]} onChange={(param)=>console.log(param)} />);
    
    let options = screen.getByTestId("options-select");
    let selectedOption = screen.getByTestId("options-select-2");

    fireEvent.change(options, { target: { value: 2 } })

    expect(selectedOption).toBeTruthy();
  });
  test('Should propagate the click event to its parent', () => {
    let spy = jest.fn();
    render(<FilterSortby options={["Relevant", "Price", "Rating"]} onChange={spy} />);
    
    let options = screen.getByTestId("options-select");

    fireEvent.change(options, { target: { value: 2 } })

    expect(spy).toHaveBeenCalled();
  });

});