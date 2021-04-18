import "./App.css";
import "./CityForm";
import CityForm from "./CityForm";
import DayAndTime from "./DayAndTime";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <CityForm />
          <DayAndTime />
        </div>
      </div>
      <small>
        <a
          href="https://github.com/uelola/weather-react"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
        , by Lola Ueda
      </small>
    </div>
  );
}

export default App;
