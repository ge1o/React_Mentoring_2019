import React, {Component, memo} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomePage from '../../containers/HomePage/HomePage';
import NotFoundPage from '../../containers/NotFoundPage/NotFoundPage';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {movies : []};
    }

    render() {
        return (
            <>
            <div className="wrapper">

                <Header />

                <main className="content">
                    <Switch>
                        <Route exact path={["/", "/movies"]} component={HomePage} />
                        <Route path="" component={NotFoundPage} />
                    </Switch>
                </main>

            </div>

            <Footer />
            </>
        );
    }
}

export default App;
