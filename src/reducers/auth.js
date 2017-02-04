import { 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    LOGOUT_USER_REQUEST
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: {},
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case LOGIN_USER_REQUEST:
            return Object.assign({}, state, {
                error: '',
                loading: true
            });     
        case LOGIN_USER_SUCCESS:
            /* TODO: RESET FORM WITH ...INITIAL_STATE */
            return Object.assign({}, state, {
                email: '',
                password: '',
                user: action.payload,
                error: '',
                loading: false
            });
        case LOGIN_USER_FAIL:
            console.log(action.payload);
            return Object.assign({}, state, {
                error: action.payload,
                password: '',
                loading: false
            });
        case REGISTER_USER_REQUEST:
            return Object.assign({}, state, {
                error: '',
                loading: true
            });
        case REGISTER_USER_SUCCESS:
            /* TODO: RESET FORM WITH ...INITIAL_STATE */
            return Object.assign({}, state, {
                email: '',
                password: '',
                user: action.payload,
                error: '',
                loading: false
            });
        case REGISTER_USER_FAIL:
            console.log(action.payload);
            return Object.assign({}, state, {
                error: action.payload,
                password: '',
                loading: false
            });
        case LOGOUT_USER_REQUEST:
            return Object.assign({}, state, {
                email: '',
                password: '',
                user: action.payload,
                error: '',
                loading: false
            });
        case LOGOUT_USER_FAIL:
            return Object.assign({}, state, {
                email: '',
                password: '',
                user: action.payload,
                error: '',
                loading: false
            });
        case LOGOUT_USER_SUCCESS:
            return Object.assign({}, state, {
                email: '',
                password: '',
                user: action.payload,
                error: '',
                loading: false
            });    
        default:
            return state;
    }
}