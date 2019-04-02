import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '../App';
import Header from '../../../components/Header/Header';

describe('<Button />', () => {
    it('should render App', () => {
        const renderedComponent = shallow(<App />);
        expect(renderedComponent.length).toEqual(1);
    });

    it('should render the header', () => {
        const renderedComponent = shallow(<App />);
        expect(renderedComponent.find(Header).length).toBe(1);
    });

    it('should render some routes', () => {
        const renderedComponent = shallow(<App />);
        expect(renderedComponent.find(Route).length).not.toBe(0);
    });
});
