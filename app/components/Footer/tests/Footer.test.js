import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer />', () => {
    it('should render logo', () => {
        const renderedComponent = shallow(<Footer />);
        expect(
            renderedComponent.contains(
                <footer>
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="footer__col">
                                    <div className="footer__logo">
                                        netflixroulette
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )
        ).toBe(true);
    });
});
