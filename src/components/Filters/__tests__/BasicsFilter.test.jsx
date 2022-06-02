import BasicsFilter from '../BasicsFilter';
import { render } from '@testing-library/react';
//aaa
describe('<BasicsFilter/>', () => {

    test('Must render component', () => {
        const { container } = render(<BasicsFilter setBasicsOn={() => false} />);
        // eslint-disable-next-line testing-library/no-container
        expect(container.getElementsByClassName('basicsFilterContainer').length).toBe(1);

    });


});