import React from "react";
import "./App.css";
import "./index";

import "./CityForm";
import CityForm from "./CityForm";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <CityForm defaultCity="Schaffhausen" />
          <Weather defaultCity="Schaffhausen" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/uelola/weather-react"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Lola Ueda
      </footer>
    </div>
  );
}

export default App;
