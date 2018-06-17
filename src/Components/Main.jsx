import React, { Component } from "react";

import Navbar from "./Navbar";
import Weather from "./Weather";

export default class extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Weather />
      </div>
    );
  }
}
