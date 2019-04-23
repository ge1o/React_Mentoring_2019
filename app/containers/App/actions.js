import { persistStore, persistReducer } from 'redux-persist'
import {
    LOAD_MOVIES,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_ERROR
} from './constants';

import movieApi from '../../../server/api/getMovies';

export function loadMovies() {
    return function(dispatch) {
        return movieApi.getAllMovies().then(movies => {
            dispatch(loadMoviesSuccess(movies));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadMoviesSuccess(movies) {
    console.log(movies, 'actions, movies')
    return {type: LOAD_MOVIES_SUCCESS, movies};
}

// export function loadMovies() {
//     return {
//         type: LOAD_MOVIES,
//     };
// }

export function moviesLoaded(movies) {
    return {
        type: LOAD_MOVIES_SUCCESS,
        movies
    };
}

export function moviesLoadingError(error) {
    return {
        type: LOAD_MOVIES_ERROR,
        error,
    };
}
