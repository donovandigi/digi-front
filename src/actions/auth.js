import firebase from 'firebase';

import { 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST
} from './types';

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error) => {
                console.log(error); /* Firebase quirk */

                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user => loginUserSuccess(dispatch,user))
                    .catch(() => loginUserFailed(dispatch));
            });
    };
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
}

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}