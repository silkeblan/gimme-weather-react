import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <h1 className="p-2">GimmeWeather</h1>
      <div className="app-card card p-3">
        <Weather defaultCity="London"/>
      </div>
      <footer><a href="https://github.com/silkeblan/gimme-weather-react" target="_blank">Open-source code</a> by Silke Blansjaar</footer>
    </div>
    </div>
  );
}
