

import React from "react";
import rain from "../../img/weather-icons/rain.svg";

const CurrentWeather = ({data}) => {
  return (
    <div className="current-weather">
      <div className="weather-icon">
        <img src={rain} alt="weather icon" />
      </div>
      <div className="weather-name">
        <p>{data.weatherName}</p>
      </div>
      <div className="temperature">
        <div className="temp">
          <h3>{data.temperature}</h3>
        </div>
        <div className="degree">
          <p>22° to 23°C</p>
        </div>
      </div>
      <div className="extra-info">
        <div className="humidity">
          <div className="humid">
            <p>{data.humidity}</p>
          </div>
          <div className="humid-now">
            <p>65%</p>
          </div>
        </div>
        <div className="pressure">
          <div className="pres">
            <p>{data.pressure}</p>
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
