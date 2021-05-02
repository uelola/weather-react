import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }
  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="seven-days-forecast">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}C
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}C
        </span>
      </div>
    </div>
  );
}
