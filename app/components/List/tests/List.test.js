import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';

describe('<List />', () => {
    it('should render list', () => {
        const renderedComponent = shallow(<List />);
        expect(renderedComponent.length).toEqual(1);
    });
});
