import firebase from 'firebase';
import { browserHistory } from 'react-router';

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
} from './types';

export const loginUser = ({email, password}) => {
    return dispatch => {
        dispatch({ type: LOGIN_USER_REQUEST });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error) => {
                loginUserFailed(dispatch, error)
            });
    };
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    browserHistory.push('/home');
}

const loginUserFailed = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.message
    })
}

export const registerUser = ({email, password}) => {
    return dispatch => {
        dispatch({ type: REGISTER_USER_REQUEST } );

        firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user => registerUserSuccess(dispatch,user))
                    .catch((error) => registerUserFailed(dispatch, error));
    };
}

const registerUserSuccess = (dispatch, user) => {
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });

    browserHistory.push('/home');
}

const registerUserFailed = (dispatch, error) => {
    dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.message
    })
}

export const logout = () => {
    return dispatch => {
        dispatch({ type: LOGOUT_USER_REQUEST } );

        firebase.auth().signOut()
                    .then(() => {
                        browserHistory.push('/');
                        dispatch({type: LOGOUT_USER_SUCCESS})
                    })
                    .catch((error) => {
                        browserHistory.push('/');
                        dispatch({type: LOGOUT_USER_FAIL, payload: error.message})
                    });
    };

    
}