import firebase from 'firebase';
import { browserHistory } from 'react-router';

import { 
    SAVE_LOAD_DETAILS_SUCCESS,
    SAVE_LOAD_DETAILS_FAIL,
    SAVE_LOAD_DETAILS_REQUEST
} from './types';

export const saveLoadDetails = (loadDetails) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        dispatch({ type: SAVE_LOAD_DETAILS_REQUEST });

        firebase.database().ref(`/users/${currentUser.uid}/loads`)
            .push(loadDetails)
            .then(() => {
                dispatch({ type: SAVE_LOAD_DETAILS_SUCCESS });
            })
            .catch(error => dispatch({type: SAVE_LOAD_DETAILS_FAIL, payload: error}));

        /*firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error) => {
                loginUserFailed(dispatch, error)
            });*/
    };
}