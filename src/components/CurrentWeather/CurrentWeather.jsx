

import React from "react";
// import cloudy from "../../img/weather-icons/mostlycloudy.svg";
import rain from "../../img/weather-icons/rain.svg";

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <div className="weather-icon">
        <img src={rain} alt="weather icon" />
      </div>
      <div className="weather-name">
        <p>Rain</p>
      </div>
      <div className="temperature">
        <div className="temp">
          <h3>Temperature</h3>
        </div>
        <div className="degree">
          <p>22° to 23°C</p>
        </div>
      </div>
      <div className="extra-info">
        <div className="humidity">
          <div className="humid">
            <p>Humidity</p>
          </div>
          <div className="humid-now">
            <p>65%</p>
          </div>
        </div>
        <div className="pressure">
          <div className="pres">
            <p>Pressure</p>
          </div>
          <div className="pres-now">
            <p>1076</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
