import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import ErrorBoundary from 'react-error-boundary';
import configureStore from './configureStore';
import {loadMovies} from './containers/App/actions';



//const history = createHistory();
const allStores = configureStore();
allStores.dispatch(loadMovies());
console.log(allStores.getState(), 'store!!!');

import '!file-loader?name=[name].[ext]!./favicon.ico';
import './scss/main.scss';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <ErrorBoundary>
            <Provider store={allStores}>
               <Router>
                   <App/>
               </Router>
            </Provider>
        </ErrorBoundary>,
        MOUNT_NODE
    );
};

render();