
import React, { useState, useEffect } from "react";
import DateTimeWeather from "../DateTimeWeather/DateTimeWeather";

const NextWeather = ({ weatherData }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (weatherData && weatherData.list) {
      const data = weatherData.list.map((item) => ({
        time: item.dt_txt.split(" ")[1].slice(0, 5),
        icon: item.weather[0].icon,
        temperature: `${Math.round(item.main.temp)}°C`,
      }));
      setForecastData(data);
    }
  }, [weatherData]);

  return (
    <div className="forecast">
      {forecastData.map((forecast, index) => (
        <DateTimeWeather key={index} time={forecast} />
      ))}
    </div>
  );
};

export default NextWeather;