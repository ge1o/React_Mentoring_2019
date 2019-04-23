import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}, history) {
    const persistConfig = {
        key: 'root',
        storage,
    };
    const persistedReducer = persistReducer(persistConfig, createReducer);

    const middlewares = [routerMiddleware(history), thunk];
    const enhancers = [applyMiddleware(...middlewares)];

    const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false
        })
        : compose;

    const store = createStore(createReducer({},history), fromJS(initialState), composeEnhancers(...enhancers));
    // let persistor = persistStore(store);

    store.injectedReducers = {};

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers, history));
            store.dispatch({ type: '@@REDUCER_INJECTED' });
        });
    }

    return store;
}