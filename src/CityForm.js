import React, { useState } from "react";
import axios from "axios";
import "./CityForm.css";

export default function CityForm() {
  let city = `Schaffhausen`;
  return (
    <form>
      <div className="row">
        <div className="col-4 enter-a-city">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
            autoFocus="on"
            autoComplete="off"
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
