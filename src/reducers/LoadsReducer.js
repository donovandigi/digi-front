import update from 'immutability-helper';

import { 
    SAVE_LOAD_DETAILS_FAIL,
    SAVE_LOAD_DETAILS_REQUEST,
    SAVE_LOAD_DETAILS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    loads: [],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case SAVE_LOAD_DETAILS_REQUEST:
            return Object.assign({}, state, {
                error: '',
                loading: true
            });
            break;
        case SAVE_LOAD_DETAILS_SUCCESS:
            let { loads } = state;
            return Object.assign({}, state, {
                loads: update(loads, {$push: action.payload}),
                error: '',
                loading: false
            });
            break;
        case SAVE_LOAD_DETAILS_FAIL:
            return Object.assign({}, state, {
                error: action.payload,
                loading: false
            });
            break;
        default:
            return state;
    }
}