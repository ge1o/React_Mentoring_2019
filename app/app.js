import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
// import { Route, Router as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ErrorBoundary from 'react-error-boundary';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import {loadMovies} from './containers/App/actions';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';



// const history = createHistory();
// const allStores = configureStore();
// allStores.store.dispatch(loadMovies());
// console.log(allStores.store, 'store!!!');

const initialState = {};
const store = configureStore(initialState, history);
let persistor = persistStore(store);

import '!file-loader?name=[name].[ext]!./favicon.ico';
import './scss/main.scss';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <ErrorBoundary>
            <Provider store={store}>
                {/*<PersistGate loading={null} persistor={persistor}>*/}
                <ConnectedRouter history={history}>
                    {/*<App />*/}
                </ConnectedRouter>
                {/*</PersistGate>*/}
            </Provider>
        </ErrorBoundary>,
        MOUNT_NODE
    );
};

if (module.hot) {
    module.hot.accept(['containers/App/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
    });
}

render();