import React, { useState } from "react";
import axios from "axios";
import "./CityForm.css";

export default function CityForm() {
  let [city, setCity] = useState(`Schaffhausen`);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setCity({ city });
    } else {
      setCity(`Schaffhausen`);
    }
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
