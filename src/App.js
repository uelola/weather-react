import React from "react";
import "./App.css";
import "./index";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Weather defaultCity="Schaffhausen" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/uelola/weather-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code on GitHub
        </a>{" "}
        by Lola Ueda and
        <a
          href="https://infallible-noether-b05338.netlify.app"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
