import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a simple weather application built on{" "}
          <a href="https://facebook.github.io/react/" target="_blank">
            React
          </a>{" "}
          built for Solutech Solution application test for{" "}
          <a href="https://github.com/Quantum99" target="_blank">
            Michael Asphall
          </a>.
        </p>
        <p>
          This app utilizes{" "}
          <a href="http://openweathermap.org/" target="_blank">
            OpenWeatherMaps
          </a>{" "}
          API to pull and return current weather data from around the world.
        </p>
      </div>
    );
  }
}
