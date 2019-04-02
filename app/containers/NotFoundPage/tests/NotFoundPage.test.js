import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../NotFoundPage';

describe('<NotFoundPage />', () => {
    it('should render not found page container', () => {
        const renderedComponent = shallow(<NotFoundPage />);
        expect(renderedComponent.length).toEqual(1);
    });
});
