import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";
import cloudy from "./img/weather-icons/mostlycloudy.svg";

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  return (
    <div className="app">
      {/* Search */}
      <div className="header">
        <div className="city-name">
          {/* <input type="text" placeholder="Enter the city" /> */}
          <h1>london</h1>
        </div>
        <div className="button">
          <button className="find-button">FIND WEATHER</button>
        </div>
      </div>
      {/* The weather now */}
      <div className="content">
        <div className="current-weather">
          <div className="weather-icon">
            <img src={cloudy} alt="weather icon" />
          </div>
          <div className="weather-name">
            <p>Cloudy</p>
          </div>
          <div className="temperature">
            <div className="temp">
              <h3>Temperature</h3>
            </div>
            <div className="degree">
              <p>22° to 23°C</p>
            </div>
          </div>
          <div className="extra-info">
            <div className="humidity">
              <div className="humid">
                <p>Humidity</p>
              </div>
              <div className="humid-now">
                <p>65%</p>
              </div>
            </div>
            <div className="pressure">
              <div className="pres">
                <p>Pressure</p>
              </div>
              <div className="pres-now">
                <p>1076</p>
              </div>
            </div>
          </div>
        </div>
        {/* The weather over next 24 hours */}
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
