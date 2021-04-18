import React, { useState } from "react";
import axios from "axios";
import "./CityForm.css";

export default function CityForm() {
  let [city, setCity] = useState(`Schaffhausen`);
  let [weatherData, setWeatherData] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "45806222ea153dc5cbd693b6ea7eebaf";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(setWeather);
    } else {
      setWeatherData(``);
    }
  }
  function setWeather(response) {
    setWeatherData(
      <div className="row Weather">
        <div className="col-2">
          <img
            src={weatherData.imgUrl}
            className="weather-icon-main"
            alt={weatherData.description}
          />
        </div>
        <div className="col-1">
          <h1 className="temp-main">{Math.round(response.data.main.temp)} </h1>
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
            <li>Humidity {response.data.main.humidity} %</li>
            <li>Wind {Math.round(response.data.wind.speed * 3.6)} km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="sunrise-sunset">
            <li>
              Sunrise <small>sunrise</small>
            </li>
            <li>
              Sunset <small>sunset</small>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <h6 className="precipitation-description">
            {response.data.weather[0].description}
          </h6>
        </div>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4 enter-a-city">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
            autoFocus="on"
            autoComplete="off"
            onChange={updateCity}
          />
        </div>
        <div className="col-1">
          <input type="submit" className="search" value="Search" />
        </div>
        <div className="col-7">
          <h4 className="city-and-country">{city}</h4>
        </div>
      </div>
    </form>
  );
}
