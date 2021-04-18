import "./App.css";
import "./CityForm";
import CityForm from "./CityForm";
import DayAndTime from "./DayAndTime";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <CityForm />
          <DayAndTime />
          <Weather />
        </div>
      </div>
      <small>
        <a href="https://github.com/uelola/weather-react" target="_blank">
          Open-source code
        </a>
        by Lola Ueda
      </small>
    </div>
  );
}

export default App;
