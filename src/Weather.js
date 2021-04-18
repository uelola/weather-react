import React from "react";
import axios from "axios";
import "./Weather.css";
import "./CityForm";
import Loader from "react-loader-spinner";

export default function Weather(weatherData) {
  return (
    <div className="row Weather">
      <div className="col-2">
        <img
          src={weatherData.imgUrl}
          className="weather-icon-main"
          alt={weatherData.description}
        />
      </div>
      <div className="col-1">
        <h1 className="temp-main">{weatherData.temperature} </h1>
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
          <li>Humidity {weatherData.humidity} %</li>
          <li>Wind {weatherData.wind} km/h</li>
        </ul>
      </div>
      <div className="col-3">
        <ul className="sunrise-sunset">
          <li>
            Sunrise <small>{weatherData.sunrise}</small>
          </li>
          <li>
            Sunset <small>{weatherData.sunset}</small>
          </li>
        </ul>
      </div>
      <div className="col-12">
        <h6 className="precipitation-description">{weatherData.description}</h6>
      </div>
    </div>
  );
}
