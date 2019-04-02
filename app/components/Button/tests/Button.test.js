import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {
    it('should render button', () => {
        const renderedComponent = shallow(<Button />);
        expect(renderedComponent.length).toEqual(1);
    });
});
