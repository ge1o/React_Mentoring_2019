import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { connectRouter } from 'connected-react-router/immutable';

import globalReducer from 'containers/App/reducer';

const routeInitialState = fromJS({
    location: null,
    router: null
});

function routeReducer(state = routeInitialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state.merge({
                location: action.payload,
            });
        case "POP":
            return state.merge({
                router: action.payload,
            });
        default:
            return state;
    }
}

export default function createReducer(injectedReducers, history) {
    return combineReducers({
        router: routeReducer(history),
        route: routeReducer,
        global: globalReducer,
        ...injectedReducers,
    });
}
