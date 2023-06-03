import React from "react";
// import "./NextWeather.scss"
import cloudy from "../../img/weather-icons/mostlycloudy.svg";

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
        <div className="time">03:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

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
        <div className="time">03:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

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
        <div className="time">03:00</div>
        <div className="weather-icon-forecast">
          <img src={cloudy} alt="weather icon" />
        </div>
        <div className="temperature">
          <span>17°C</span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="time">03:00</div>
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
