import React from 'react';
import { shallow } from 'enzyme';

import ListHeader from '../ListHeader';

describe('<ListHeader />', () => {
    it('should render list header', () => {
        const renderedComponent = shallow(<ListHeader />);
        expect(renderedComponent.length).toEqual(1);
    });
});
