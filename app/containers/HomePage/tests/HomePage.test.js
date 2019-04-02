import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';

describe('<HomePage />', () => {
    it('should render home page container', () => {
        const renderedComponent = shallow(<HomePage />);
        expect(renderedComponent.length).toEqual(1);
    });
});
