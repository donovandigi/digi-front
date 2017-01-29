import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AuthReducer from './auth';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  auth: AuthReducer
});
