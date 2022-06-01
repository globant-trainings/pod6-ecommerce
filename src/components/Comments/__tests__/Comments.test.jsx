import Comments from '../Comments';
import { render, screen } from '@testing-library/react';
//aaa
describe('<Comments/>', () => {
  test('Should render number of comments if you pass the prop', () => {
    //arrange
    render(<Comments numberOfComments={1} />);
    //act
    let comments = screen.getByText("1");

    //assert
    expect(comments.textContent).toBe("1")
  });


  test('Should match snapshot', () => {
    render(<Comments numberOfComments={2} />);

    let comments = screen.getByText("2");

    expect(comments).toMatchSnapshot();
  });

});