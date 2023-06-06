import React from "react";
import Icon from "../Icon/Icon.jsx";

const DateTimeWeather = ({ time }) => {
  return (
    <div>
      <p>{time.time}</p>
      <div className="weather-icon-forecast">
        <Icon icon={time.icon} />
      </div>
      <p>{time.temperature}</p>
    </div>
  );
};

export default DateTimeWeather;
