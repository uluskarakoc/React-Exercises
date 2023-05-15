import Weather from "./Weather";
import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Berlin");
  return (
    <>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder="Write a City"
        onChange={(e) => setCity(e.target.value)}
      />
      <Weather city={city} />
    </>
  );
}

export default App;
