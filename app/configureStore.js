import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
}