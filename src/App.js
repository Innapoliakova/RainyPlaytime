import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";

import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import NextWeather from "./components/NextWeather/NextWeather";


//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {

const weatherData = {
  weatherName: "Rain",
  temperature: "22° to 23°C",
  humidity: "65%",
  pressure: "1076",
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
