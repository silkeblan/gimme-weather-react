import axios from "axios";
import { useState } from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  const [apiCity, setApiCity] = useState(null);
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("GB");
  const [description, setDescription] = useState("Cloudy");
  const [temp, setTemp] = useState(14);
  const [humidity, setHumidity] = useState(90);
  const [pressure, setPressure] = useState(12);
  const [wind, setWind] = useState (5);
  
  function changeCity(event) {
    setApiCity(event.target.value.trim().toLowerCase());
  }

  function displayWeather(response) {
    console.log(response);
    setCity(response.data.name);
    setCountry(response.data.sys.country);
    setDescription(response.data.weather[0].description);
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity)
    setPressure(response.data.main.pressure);
    setWind(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey="4e9ea9a24e8a511bcca72a1d94b39b40";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  return (
    <div className="App">
    <div className="container">
      <h1>GimmeWeather</h1>
      <div className="app-card card p-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
          <input type="search" placeholder="Enter a city..." className="city-input form-control col-6" onChange={changeCity} autoFocus={true}/>
          <input type="submit" value="Search" className="submit-btn btn btn-primary col-2" />
          <input type="button" value="Current" className="current-btn btn btn-warning col-2"/>
          </div>
        </form>
        <Weather city={city} country={country} description={description} temp={temp} humidity={humidity} pressure={pressure} wind={wind} />
      </div>
      <footer><a href="https://github.com/silkeblan/gimme-weather-react" target="_blank">Open-source code</a> by Silke Blansjaar</footer>
    </div>
    </div>
  );
}
