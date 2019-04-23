import { CHANGE_SEARCHVALUE } from './constants';
import {LOAD_MOVIES} from "../App/constants";

export function changeSearchValue(value) {
    console.log('changeSearchValue ->', value);
    return {
        type: CHANGE_SEARCHVALUE,
        value
    };
}

// export function getMovies(value) {
//     console.log('getMovies ->', value);
//     return {
//         type: LOAD_MOVIES,
//         value
//     };
// }
