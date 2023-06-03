import React from "react";
// import "./Search.scss"

const Search = () => {
    return (
      <div className="header">
        <div className="city-name">
          {/* <input type="text" placeholder="Enter the city" /> */}
          <h1>london</h1>
        </div>
        <div className="button">
          <button className="find-button">FIND WEATHER</button>
        </div>
      </div>
    );
    }

export default Search;
