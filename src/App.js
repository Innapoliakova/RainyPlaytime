import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";

import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import NextWeather from "./components/NextWeather/NextWeather";
import FakeWeatherData from "./data/FakeWeather.json"; 


//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {

// const weatherData = {
//   weatherName: "Rain",
//   temperature_min: "22°",
//   temperature_max: "23°C",
//   humidity: "65%",
//   pressure: "1076",
// };

const weatherData = {
  weatherIcon: FakeWeatherData.list[0].weather[0].icon,
  weatherName: FakeWeatherData.list[0].weather[0].description,
  temperature_min: FakeWeatherData.list[0].main.temp_min,
  temperature_max: FakeWeatherData.list[0].main.temp_max,
  humidity: FakeWeatherData.list[0].main.humidity,
  pressure: FakeWeatherData.list[0].main.pressure,
};

  return (
    <div className="app">
      <Search />
      <div className="content">
        <CurrentWeather data={weatherData} />
        <NextWeather />
      </div>

      {/* <Header title={siteTitle}/>
      <main className="c-site-main" tabIndex="0">
      <Icon name="clear"/>
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
