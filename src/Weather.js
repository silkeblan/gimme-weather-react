import axios from "axios";
import React, { useState } from "react";
import "./Weather.css"
import WeatherDisplay from "./WeatherDisplay";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  const [city, setCity] = useState(props.defaultCity)
  
  function search() {
    let apiKey="4e9ea9a24e8a511bcca72a1d94b39b40";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function changeCity(event) {
    setCity(event.target.value.trim().toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
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
        <WeatherDisplay data={weatherData}/>
      </div>
    )
  } else {
    search()
    return "Loading..."
  }

}