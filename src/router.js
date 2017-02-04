import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import { history } from "./store.js";
import App from "./containers/App";
import Landing from "./containers/Landing";
import Home from "./containers/Home";
import NotFound from "./components/NotFound/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="/home" component={Home} />
      <Route path="/register" component={Home} />

      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
