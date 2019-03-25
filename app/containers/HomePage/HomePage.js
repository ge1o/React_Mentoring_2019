import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import ListHeader from "../../components/ListHeader/ListHeader";
import List from "../../components/List/List";

import './home-page.scss';

export default class HomePage extends React.PureComponent {
    render() {
        return (
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="home-page__col">
                            <Route path={["/", "/movies"]} component={ListHeader}/>
                            <Route path={["/", "/movies"]} component={List}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
