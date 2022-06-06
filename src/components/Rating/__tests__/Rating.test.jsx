import Rating from '../Rating';
import { render, screen } from '@testing-library/react';

describe('<Rating/>', () => {
  test('Should render three stars yellow follwed by two blanks', () => {
    render(<Rating rating={3} />);

    let stars = screen.getByTestId("star-rating");

    expect(stars).toMatchSnapshot('Check rendered yellow stars to be the first three');
  });
  test('Should render two and a half stars yellow follwed by two and a half blanks', () => {
    render(<Rating rating={2.5} />);

    let stars = screen.getByTestId("star-rating");

    expect(stars).toMatchSnapshot('Check rendered yellow stars to be the first two and a half');
  });
  test('Should render two stars yellow follwed by three blanks', () => {
    render(<Rating rating={2.49} />);

    let stars = screen.getByTestId("star-rating");

    expect(stars).toMatchSnapshot('Check rendered yellow stars to be the first two');
  });

});