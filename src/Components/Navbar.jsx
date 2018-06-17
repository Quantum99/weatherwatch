import React, { Component } from "react";
import { Link, IndexLink } from "react-router";

export default class extends Component {
  getInitialState() {
    // returns false if localStorage doesn't exist or localStorage value for react-weather-app is null'
    // otherwise, returns the localStorage value for react-weather-app
    const localStorageVal =
      localStorage && localStorage.getItem("weatherwatch.temperature");

    return {
      tempType: localStorageVal ? localStorageVal : "F"
    };
  }

  updateTempType(tempType) {
    this.setState({ tempType });
    if (localStorage) {
      localStorage.setItem("weatherwatch.temperature", tempType);
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Solutech Weather App</li>
            <li>
              <IndexLink
                to="/"
                activeClassName="active"
                activeStyle={{ fontWeight: "bold" }}
              >
                Home
              </IndexLink>
            </li>
            <li>
              <Link
                to="/about"
                activeClassName="active"
                activeStyle={{ fontWeight: "bold" }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
