import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AuthReducer from './AuthReducer';
import LoadsReducer from './LoadsReducer';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  auth: AuthReducer,
  loads: LoadsReducer
});
