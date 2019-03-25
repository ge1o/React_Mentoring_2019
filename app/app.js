import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';

import '!file-loader?name=[name].[ext]!./favicon.ico';
import './scss/main.scss';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
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