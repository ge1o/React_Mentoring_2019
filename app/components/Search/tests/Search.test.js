import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

import Search from '../Search';

describe('<Search />', () => {
    it('should render search', () => {
        const renderedComponent = shallow(<Search />);
        expect(renderedComponent.length).toEqual(1);
    });

    it('should start search on button click', () => {
        const spy = jest.spyOn(Search.prototype, 'startSearch');

        const wrapper = mount(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );

        wrapper.find('.button--search').first().simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
