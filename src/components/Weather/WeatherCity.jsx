import React from "react";
import "./styles.css";

const CardExampleCard = ({ weatherData }) => (
  <div>
    <div className="main">
      <div className="header">City Name: {weatherData.name}</div>
      <div className="top">
        <p className="header">{weatherData.name}</p>
      </div>
      <div className="flex">
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: {weatherData.main.temp - 273.15} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
        </p>
        <p className="sunrise-sunset">
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
        </p>
      </div>
    </div>
  </div>
);

export default CardExampleCard;
