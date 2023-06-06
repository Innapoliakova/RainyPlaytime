import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [cityName, setCityName] = useState("");

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(cityName);
  };

  return (
    <div className="header">
      <div className="city-name">
        <input
          type="text"
          placeholder="Type in a city name"
          value={cityName}
          onChange={handleInputChange}
        />
      </div>
      <div className="button">
        <button className="find-button" onClick={handleSearch}>
          FIND WEATHER
        </button>
      </div>
    </div>
  );
};

export default Search;
