import React, { Component } from "react";
import { Route, Router, IndexRoute, hashHistory } from "react-router";

import Kingston from "./Kingston/Kingston";
import MoBay from "./MoBay/MoBay";

export default class extends Component {
  render() {
    return (
      <div>
        <Kingston />
        <MoBay />
      </div>
    );
  }
}
