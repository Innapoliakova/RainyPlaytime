import React from "react";
import clear from "../../img/weather-icons/clear.svg";
import cloudy from "../../img/weather-icons/cloudy.svg";
import drizzle from "../../img/weather-icons/drizzle.svg";
import fog from "../../img/weather-icons/fog.svg";
import mostlycloudy from "../../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../../img/weather-icons/partlycloudy.svg";
import rain from "../../img/weather-icons/rain.svg";
import snow from "../../img/weather-icons/snow.svg";
import storm from "../../img/weather-icons/storm.svg";
import unknown from "../../img/weather-icons/unknown.svg";

function Icon({ icon }) {
  let iconSrc;

  if (icon === "01d" || icon === "01n") {
    iconSrc = clear;
  } else if (icon === "02d" || icon === "02n") {
    iconSrc = partlycloudy;
  } else if (
    icon === "03d" ||
    icon === "03n" ||
    icon === "04d" ||
    icon === "04n"
  ) {
    iconSrc = mostlycloudy;
  } else if (
    icon === "09d" ||
    icon === "09n" ||
    icon === "10d" ||
    icon === "10n"
  ) {
    iconSrc = rain;
  } else if (icon === "11d" || icon === "11n") {
    iconSrc = storm;
  } else if (icon === "13d" || icon === "13n") {
    iconSrc = snow;
  } else if (icon === "50d" || icon === "50n") {
    iconSrc = fog;
  } else {
    iconSrc = unknown;
  }

  return <img src={iconSrc} alt="Weather Icon" />;
}

export default Icon;
