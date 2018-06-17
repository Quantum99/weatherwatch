import React, { Component } from "react";
import { Route, Router, IndexRoute, hashHistory } from "react-router";

import Navbar from "./Navbar";

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="about" component={About} />
          <IndexRoute component={Weather} />
        </Route>
      </Router>
    );
  }
}
