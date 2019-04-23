import { fromJS } from 'immutable';

import { CHANGE_SEARCHVALUE } from './constants';

const initialState = fromJS({
    searchvalue: ''
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCHVALUE:
            return state.set('value', action.value);
        default:
            return state;
    }
}

export default homeReducer;