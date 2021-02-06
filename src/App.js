import axios from "axios";
import { useState } from "react";
import './App.css';
import Weather from "./Weather";
import Forecast from "./Forecast";


export default function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>GimmeWeather</h1>
      <div className="app-card card p-3">
        <Weather defaultCity="London"/>
        <Forecast />
      </div>
      <footer><a href="https://github.com/silkeblan/gimme-weather-react" target="_blank">Open-source code</a> by Silke Blansjaar</footer>
    </div>
    </div>
  );
}
