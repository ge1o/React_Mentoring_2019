import {
    LOAD_MOVIES,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_ERROR
} from './constants';

const initialState = {
    loading: false,
    error: false,
    movies: {}
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES:
            return { ...state, loading: true }
        case LOAD_MOVIES_SUCCESS:
            return { ...state, movies: action.payload }
        case LOAD_MOVIES_ERROR:
            return { ...state, error: true, loading: false }
        default:
            return state;
    }
}

export default appReducer;
