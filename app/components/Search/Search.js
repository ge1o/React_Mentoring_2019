import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.js';

import './search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searching: false};

        this.startSearch = this.startSearch.bind(this);
    }

    startSearch() {
        this.setState(state => ({
            searching: !state.searching
        }));
    }

    render() {
        return (
            <div className="row">
                <div className="search">
                    <div className="search__col">
                        <h2 className="search__heading">Find your movie</h2>
                        <input className="search__input" type="text" placeholder="Search" />
                        <div className="search__options">
                            <span className="search__label">search by</span>
                            <Button className="button button--small">title</Button>
                            <Button className="button button--inactive button--small">genre</Button>
                            <Link className="button button--search" to="/movies" onClick={this.startSearch}>Search</Link>
                            {/*<Button className="button button--search" goto={'/movies'} onClick={this.startSearch}>Search</Button>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;