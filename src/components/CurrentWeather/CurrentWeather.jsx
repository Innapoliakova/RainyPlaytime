
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
        <p className="current-weather__temperature">
          Temperature: {Math.round(data.main.temp)}°C
        </p>
        <p className="current-weather__humidity">
          Humidity: {data.main.humidity}%
        </p>
        <p className="current-weather__pressure">
          Pressure: {data.main.pressure} hPa
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;