import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css"

export default function ForecastPreview(props) {
  function formatDay() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayIndex = new Date(props.data.dt * 1000).getDay();
    let day = days[dayIndex];
    return day
  }
  
  return(
    <div className="ForecastPreview col-2">
      <span className="week-days">{formatDay()}</span>
      <WeatherIcon code={props.data.weather[0].icon} size={20} />
      <span className="day-temps">{Math.round(props.data.temp.min)}° <span className="min-temps">/ {Math.round(props.data.temp.max)}°</span></span>
    </div>
  )
}