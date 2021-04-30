import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import DayAndTime from "./DayAndTime";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      sunrise: `6:20`,
      sunset: `18:23`,
    });
  }
  function search() {
    const apiKey = `45806222ea153dc5cbd693b6ea7eebaf`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4 enter-a-city">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
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
        <DayAndTime date={weatherData.date} />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return `Loading`;
  }
}
