import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css"
import ForecastPreview from "./ForecastPreview"

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({ready: false});
  
  function showForecast(response) {
    setForecastData(response.data)
    setLoaded(true);
  }
  
  function getForecast() {
    let apiKey = "4e9ea9a24e8a511bcca72a1d94b39b40"
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showForecast);
  }

  if (loaded && props.lat === forecastData.lat) {
    return(
      <div className="Forecast row">
      <ForecastPreview data={forecastData.daily[0]} />
      <ForecastPreview data={forecastData.daily[1]} />
      <ForecastPreview data={forecastData.daily[2]} />
      <ForecastPreview data={forecastData.daily[3]} />
      <ForecastPreview data={forecastData.daily[4]} />
      <ForecastPreview data={forecastData.daily[5]} />
    </div>
  )
} else {
  getForecast()
  return "Loading forecast..."
}
}