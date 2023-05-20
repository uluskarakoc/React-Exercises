import Weather from "./Weather";
import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Buchholz");

  return (
    <>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder=" Write a City"
        onChange={(e) => setCity(e.target.value)}
      />
      <Weather city={city}/>
    </>
  );
}

export default App;
