
import React, { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";

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
      <p>INNA'S WEATHER APP</p>
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

