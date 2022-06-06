import { render, screen, fireEvent} from '@testing-library/react';
import Pagination from '../Pagination'
describe('<Pagination/>', () => {
  test('Must render component', () => {
    let spy = jest.fn();
    const { container } = render(<Pagination getItems={spy} />);
    // eslint-disable-next-line testing-library/no-container
    expect(container.getElementsByClassName('paginationContainer').length).toBe(1);
    });
  test('Next and back button must be called', () => {
    let spy = jest.fn();
    render(<Pagination getItems={spy} />);
    let paginationNext = screen.getByText("Next");
    fireEvent.click(paginationNext);
    expect(spy).toHaveBeenCalledTimes(2);
    let paginationBack = screen.getByText("Back");
    fireEvent.click(paginationBack);
    expect(spy).toHaveBeenCalledTimes(3);
  })
});