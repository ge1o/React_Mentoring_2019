import { fromJS } from 'immutable';

import {
    LOAD_MOVIES,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_ERROR
} from './constants';

const initialState = fromJS({
    loading: false,
    error: false,
    movies: {}
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES:
            console.log(action.payload, 'LOAD_MOVIES');
            return state
                .set('loading', true)
                .set('error', false)
                .setIn(['movies'], false);
        case LOAD_MOVIES_SUCCESS:
            console.log(action.payload, 'LOAD_MOVIES_SUCCESS');
            return action.payload;
        case LOAD_MOVIES_ERROR:
            return state
                .set('error', action.error)
                .set('loading', false);
        default:
            return state;
    }
}

export default appReducer;
