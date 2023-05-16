import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const searchCity = localStorage.getItem("searchCity");
    setCityName(searchCity);
  }, []);

  useEffect(() => {
    const API_KEY = "9be659f4f4263786364d90faf186594a";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      localStorage.setItem("searchCity", cityName);
    };
    if (cityName) {
      fetchData();
    }
  }, [cityName]);

  return (
    <div className="App">
      <h1>Wetter-App</h1>
      {/* setze hier die props richtig*/}
      <SearchBar onSearchCity={setCityName} />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
}

export default App;
