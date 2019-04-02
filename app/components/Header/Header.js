import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Search from '../../components/Search/Search.js';
import Button from '../../components/Button/Button.js';

import './header.scss';

class Header extends React.Component {
    renderButton = () => <Button className="button button--header-search">Search</Button>;

    render() {
        return (
            <header>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="header__col">
                                <div className="header__top-row">
                                    <div className="header__logo">
                                        <Link className="header__logo-link" to="/">netflixroulette</Link>
                                    </div>

                                    <Route path="/movies" render={this.renderButton} />
                                </div>
                            </div>
                        </div>
                        <Route exact path="/" component={Search} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;