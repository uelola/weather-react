import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DayAndTime from "./DayAndTime";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      sunrise: `6:20`,
      sunset: `18:23`,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <DayAndTime date={weatherData.date} />
        <div className="row Weather">
          <div className="col-2">
            <img
              src={weatherData.iconUrl}
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
            <h6 className="precipitation-description">
              {weatherData.description}
            </h6>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `45806222ea153dc5cbd693b6ea7eebaf`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading`;
  }
}
