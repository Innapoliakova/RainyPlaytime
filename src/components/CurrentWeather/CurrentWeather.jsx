import React from "react";
import Icon from "../Icon/Icon.jsx";

const CurrentWeather = ({ data }) => {
  const weather = data.weather[0];

  return (
    <div className="current-weather">
      <div className="current-weather__icon">
        <Icon icon={weather.icon} />
      </div>
      <div className="current-weather__info">
        <h2 className="current-weather__name">{weather.description}</h2>

        <div className="temperature">
          <div className="current-weather__temperature">
            <p>Temperature:</p>
          </div>
          <div className="degree">{Math.round(data.main.temp)}°C </div>
        </div>

        <div className="extra-info">
          <div className="humidity">
            <div className="current-weather__humidity">
              <p>Humidity:</p>
            </div>
            <div> {data.main.humidity}%</div>
          </div>

          <div className="pressure">
            <div className="current-weather__pressure">
              <p>Pressure: </p>
            </div>
            <div> {data.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
