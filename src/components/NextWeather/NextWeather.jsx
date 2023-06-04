import React from "react";
// import "./NextWeather.scss"
import cloudy from "../../img/weather-icons/mostlycloudy.svg";
import Icon from "../Icon/Icon.jsx";

const NextWeather = () => {
  return (
    <div className="forecast">
      <div className="forecast-item">
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
      </div>
    </div>
  );
};

export default NextWeather;


