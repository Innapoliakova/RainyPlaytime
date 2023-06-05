import React from "react";
import Icon from "../Icon/Icon.jsx";

const DateTimeWeather = ({ time }) => {
  return (
    <div>
      <p>{time.time}</p>
      <div className="weather-icon-forecast">
        <Icon src={time.icon} alt="weather icon" />
      </div>
      <p>{time.temperature}</p>
    </div>
  );
};

export default DateTimeWeather