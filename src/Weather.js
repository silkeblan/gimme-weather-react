import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css"

export default function Weather(props) {
  return(
    <div className="Weather">
      <h2>{props.city}, {props.country}</h2>
      <p className="time-and-description">Last updated: Friday, 12:04
        <br />
        {props.description}
      </p>
      <div className="temp-div">
        <ReactAnimatedWeather icon="CLEAR_DAY" color="black" size={60} animate={true} />
        <span className="temperature">{Math.round(props.temp)}°C</span><span className="alt-unit"> | <a href="/">F</a></span>
      </div>
      <ul>
        <li>Humidity: {props.humidity}%</li>
        <li>Pressure: {props.pressure}nPa</li>
        <li>Wind: {props.wind}mps</li>
      </ul>
    </div>
  )
}