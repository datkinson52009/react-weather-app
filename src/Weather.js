import React from "react";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "Atlanta",
    temperature: "25",
    humidity: "66%",
    wind: "5%",
    day: "Tuesday",
    time: "10:45",
    description: "cloudy",
  };
  return (
    <div className="Weather">
      <h1>Current Weather</h1>
      <form>
        <div className="row">
          <div className="col-6 cityInput">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control placeholder-background"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="form-control" />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-6"></div>
        <div className="col-3 button">
          <a href="/" className="currentLocation">
            {" "}
            Use current location{" "}
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-4 section-one">
          <img
            className="currentTemperatureEmoji"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
          <span className="currentTemperature">{weatherData.temperature}</span>
          <a href="/" className="conversion">
            °C <span>|</span>
          </a>

          <a href="/" className="conversion">
            °F
          </a>
        </div>
        <div className="col-3 currentConditionList">
          <ul>
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {weatherData.wind}</li>
          </ul>
        </div>
        <div className="col-5 currentCity">
          <div className="cityChoice">{weatherData.city}</div>
          <div className="day-time">
            Last updated: {weatherData.day} {weatherData.time}
          </div>
          <div className="currentCondition">{weatherData.description}</div>
        </div>
      </div>

      <div className="weather-forecast">
        <div className="row forecast">
          <div className="col">
            <div></div>
            <div>
              <img src="/" alt="" width="50" />
            </div>
            <div className="forecast-temp">
              <span className="high"></span>
              <span className="low"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
