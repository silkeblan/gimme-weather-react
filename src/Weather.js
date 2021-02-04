import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css"

export default function Weather() {
  return(
    <div className="Weather">
      <h2>London, GB</h2>
      <p className="time-and-description">Last updated: Friday, 12:04
        <br />
        Cloudy
      </p>
      <div className="temp-div">
        <ReactAnimatedWeather icon="CLEAR_DAY" color="black" size={60} animate={true} />
        <span className="temperature">14°C</span><span className="alt-unit"> | <a href="#">F</a></span>
      </div>
      <ul>
        <li>Humidity: 90%</li>
        <li>Pressure: 23nPa</li>
        <li>Wind: 5mps</li>
      </ul>
    </div>
  )
}