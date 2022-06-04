import ProductDetails from '../ProductDetails';
import { render } from '@testing-library/react';

describe('<ProductDetails/>', () => {
  test('Must render component', () => {
    const { container } = render(<ProductDetails />);
    // eslint-disable-next-line testing-library/no-container
    expect(container.getElementsByClassName('productDetailsContainer').length).toBe(1);

  });


});