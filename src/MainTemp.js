import React, { useState } from "react";

export default function MainTemp(props) {
  const [unit, setUnit] = useState("metric");
  const [temp, setTemp] = useState(props.temp);

  function showFahrenheit(event) {
  event.preventDefault();
  setUnit("imperial");
  setTemp((temp * 9/5) + 32);
}

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
    setTemp(props.temp);
  }

  if (unit === "metric") {
    return <span className="MainTemp"><span className="temperature">{Math.round(props.temp)}°C</span><span className="alt-unit"> | <a href="/" onClick={showFahrenheit}>F</a></span></span>
  } else {
    return <span className="MainTemp"><span className="temperature">{Math.round(temp)}°F</span><span className="alt-unit"> | <a href="/" onClick={showCelsius}>C</a></span></span>
  }
  } 