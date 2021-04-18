import React, { useState } from "react";
import axios from "axios";
import "./CityForm.css";
import "./Weather";

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
    let weatherData = {
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: 10,
    };
    return setWeatherData(weatherData);
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
