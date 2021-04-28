import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row Weather">
        <div className="col-2">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="col-1">
          <h1 className="temp-main">{props.data.temperature} </h1>
        </div>
        <div className="col-2">
          <span className="degree-views">
            <a href="/" className="celsius active">
              °C
            </a>
            |
            <a href="/" className="fahrenheit">
              °F
            </a>
          </span>
        </div>
        <div className="col-4">
          <ul className="humidity-wind">
            <li>Humidity {props.data.humidity} %</li>
            <li>Wind {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="sunrise-sunset">
            <li>
              Sunrise <small>{props.data.sunrise}</small>
            </li>
            <li>
              Sunset <small>{props.data.sunset}</small>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <h6 className="precipitation-description">
            {props.data.description}
          </h6>
        </div>
      </div>
    </div>
  );
}
