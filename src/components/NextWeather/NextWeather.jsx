
import React from "react";
import Icon from "../Icon/Icon.jsx";
import DateTimeWeather from "../DateTimeWeather/DateTimeWeather";
import FakeWeatherData from "../../data/FakeWeather.json";

// const NextWeather = () => {
//   const forecastData = [
//     { time: "03:00", icon: cloudy, temperature: "17°C" },
//     { time: "06:00", icon: cloudy, temperature: "17°C" },
//     { time: "09:00", icon: cloudy, temperature: "17°C" },
//     { time: "12:00", icon: cloudy, temperature: "17°C" },
//     { time: "15:00", icon: cloudy, temperature: "17°C" },
//     { time: "18:00", icon: cloudy, temperature: "17°C" },
//     { time: "21:00", icon: cloudy, temperature: "17°C" },
//   ];

const NextWeather = () => {
    const targetDate = "2017-02-20";
    const filteredData = FakeWeatherData.list.filter((item) => {
      const itemDate = item.dt_txt.split(" ")[0];
      return itemDate === targetDate;
    });

    const forecastData = filteredData.map((item) => ({
      time: item.dt_txt.split(" ")[1].slice(0, 5),
      icon: item.weather[0].icon,
      temperature: `${Math.round(((item.main.temp - 32) * 5) / 9)}°C`,
      // Fahrenheit to Celsius - ?
    }));

  return (
    <div className="forecast">
      {forecastData.map((forecast, index) => (
        <DateTimeWeather key={index} time={forecast} />
      ))}
      
      {/* <div className="forecast-item">
        <div className="time">03:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="time">06:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="time">09:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="time">12:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="time">15:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="time">18:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="time">21:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div> */}
    </div>
  );
};

export default NextWeather;
