import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import MainTemp from "./MainTemp";

export default function WeatherDisplay(props) {
  return(
    <div className="WeatherDisplay">
      <h2 className="text-capitalize">{props.data.city}, {props.data.country}</h2>
        <p className="time-and-description">Last updated: <FormattedDate timestamp={props.data.timestamp} />
          <br />
          <span className="text-capitalize">{props.data.description}</span>
        </p>
        <div className="row">
        <div className="temp-div col-6">
          <ReactAnimatedWeather icon="CLEAR_DAY" color="black" size={60} animate={true} />
          <MainTemp temp={props.data.temp} />
        </div>
        <ul className="col-5">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Pressure: {props.data.pressure} nPa</li>
          <li>Wind: {Math.round(props.data.wind)} m/s</li>
        </ul>
        </div>
    </div>
  )
}