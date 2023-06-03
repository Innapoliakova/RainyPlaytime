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
  return (
    <div className="app">
      <Search></Search>
      <div className="content">
        <CurrentWeather></CurrentWeather>
        <NextWeather></NextWeather>
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
