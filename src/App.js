import axios from "axios";
import { useState } from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  const [city, setCity] = useState(null);
  
  function changeCity(event) {
    setCity(event.target.value.trim().toLowerCase());
  }

  function displayWeather(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey="4e9ea9a24e8a511bcca72a1d94b39b40";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  return (
    <div className="App">
      <h1>GimmeWeather</h1>
      <div className="app-card">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Enter a city..." className="city-input" onChange={changeCity}/>
          <input type="submit" value="Search" className="submit-btn" />
          <input type="button" value="Current" className="current-btn"/>
        </form>
        <Weather />
      </div>
    </div>
  );
}
