import React from 'react';
import { shallow } from 'enzyme';

import ListItem from '../ListItem';

describe('<ListItem />', () => {
    it('should render a list item', () => {
        const renderedComponent = shallow(<ListItem />);
        expect(renderedComponent.length).toEqual(1);
    });
});
