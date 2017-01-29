import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import ReduxThunk from 'redux-thunk';
import { reducers } from "./reducers/index";

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));
// add the thunk middleware
middlewares.push(ReduxThunk);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };
