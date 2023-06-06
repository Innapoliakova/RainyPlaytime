// import React from "react";
// import Icon from "../Icon/Icon.jsx";

// const CurrentWeather = ({ data }) => {
//   const weather = data.weather[0];

//   return (
//     <div className="current-weather">
//       <div className="current-weather__icon">
//         <Icon icon={weather.icon} />
//       </div>
//       <div className="current-weather__info">
//         <h2 className="current-weather__name">{weather.description}</h2>
//         <p className="current-weather__temperature">
//           Temperature: {Math.round(data.main.temp)}°C
//         </p>
//         <p className="current-weather__humidity">
//           Humidity: {data.main.humidity}%
//         </p>
//         <p className="current-weather__pressure">
//           Pressure: {data.main.pressure} hPa
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CurrentWeather;

import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import NextWeather from "./components/NextWeather/NextWeather";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (cityName) => {
    const API_KEY = "3159defa1fc8f95a0c1fa07247572cce";

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Error fetching weather data: ", error);
    }
  };

  return (
    <div className="app">
      <Search onSearch={fetchWeatherData} />
      <div className="content">
        {weatherData && <CurrentWeather data={weatherData.list[0]} />}
        {weatherData && <NextWeather weatherData={weatherData} />}
      </div>
      <Footer />
    </div>
  );
}

export default App; 