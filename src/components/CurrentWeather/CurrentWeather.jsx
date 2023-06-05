

import React from "react";
// import rain from "../../img/weather-icons/rain.svg";
import Icon from "../Icon/Icon.jsx";

const CurrentWeather = ({data}) => {
  
  return (
    <div className="current-weather">
      <div className="weather-icon">
        {/* <img src={data.weatherIcon} alt="weather icon" /> */}
        <Icon name={data.weatherIcon} />
      </div>
      <div className="weather-name">
        <p>{data.weatherName}</p>
      </div>
      <div className="temperature">
        <div className="temp">
          <h3>Temperature</h3>
        </div>
        <div className="degree">
          <p>
            <span>
              {Math.round(data.temperature_min)} to{" "}
              {Math.round(data.temperature_max)}°C 
              {/* // Fahrenheit to Celsius - ? */}
            </span>
          </p>
        </div>
      </div>
      <div className="extra-info">
        <div className="humidity">
          <div className="humid">
            <p>Humidity</p>
          </div>
          <div className="humid-now">
            <p>{data.humidity}</p>
          </div>
        </div>
        <div className="pressure">
          <div className="pres">
            <p>Pressure</p>
          </div>
          <div className="pres-now">
            <p>{data.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
