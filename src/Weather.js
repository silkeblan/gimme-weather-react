import axios from "axios";
import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css"
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  
  function changeCity(event) {
    const city = event.target.value.trim().toLowerCase();
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  function displayWeather(response) {
    setWeatherData(
      {ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      timestamp: response.data.dt * 1000
  })
  }

  if (weatherData.ready) {
    return(
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="search" placeholder="Enter a city..." className="city-input form-control col-6" autoFocus={true} onChange={changeCity}/>
            <input type="submit" value="Search" className="submit-btn btn btn-primary col-2" />
            <input type="button" value="Current" className="current-btn btn btn-warning col-2"/>
          </div>
        </form>
        <h2 className="text-capitalize">{weatherData.city}, {weatherData.country}</h2>
        <p className="time-and-description">Last updated: <FormattedDate timestamp={weatherData.timestamp} />
          <br />
          <span className="text-capitalize">{weatherData.description}</span>
        </p>
        <div className="row">
        <div className="temp-div col-6">
          <ReactAnimatedWeather icon="CLEAR_DAY" color="black" size={60} animate={true} />
          <span className="temperature">{Math.round(weatherData.temp)}°C</span><span className="alt-unit"> | <a href="/">F</a></span>
        </div>
        <ul className="col-5">
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Pressure: {weatherData.pressure} nPa</li>
          <li>Wind: {Math.round(weatherData.wind)} m/s</li>
        </ul>
        </div>
      </div>
    )
  } else {
    let apiKey="4e9ea9a24e8a511bcca72a1d94b39b40";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading..."
  }

}