import React, { useState } from "react";
//import axios from "axios";
import "./CityForm.css";

export default function CityForm() {
  let [city, setCity] = useState(`Schaffhausen`);
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form>
      <div className="row">
        <div className="col-4 enter-a-city">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city"
            autoComplete="off"
            autoFocus="on"
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
