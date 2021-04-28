import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1 className="temp-main">{props.celsius} </h1>
        <span className="degree-views">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="col-1">
          <h1 className="temp-main">{fahrenheit()} </h1>
        </div>
        <div className="col-2">
          <span className="degree-views">
            <a href="/" onClick={showCelsius} className="celsius">
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
