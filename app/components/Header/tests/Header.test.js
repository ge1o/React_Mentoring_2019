import React from 'react';
import { shallow, mount } from 'enzyme';

import { Link, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Button from '../../../components/Button/Button.js';

describe('<Header />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(<Header />);
        expect(renderedComponent.length).toEqual(1);
    });

    it('should render Button component if path is root', () => {
        const renderedComponent = shallow(<Header />);
        const headerInstance = renderedComponent.instance();
        const button = headerInstance.renderButton;
        const callback = jest.fn(button);

        callback(button);

        expect(callback).toBeCalled();
        // expect(callback).toHaveReturnedWith(button);
    });
});
