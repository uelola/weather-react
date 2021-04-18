import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temperature: 19,
    description: "Clear Sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 5,
    wind: 10,
    sunrise: "6:20",
    sunset: "18:23",
  };
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
