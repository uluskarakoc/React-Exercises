import React from "react";
import { useEffect,useState} from "react";

function Weather({city}) {
  const [temp,setTemp]=useState(null)


  useEffect(() => {
    async function fetchData() {
      const API_KEY = "6e0951084d0113cc7b8e84761629a5e2";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data =  await response.json();
      console.log(data);
      setTemp(data.main.temp)
  
    }
    fetchData()
  },[city]);
  
  return (
    <div>
      
      <h2>{city} hat die Temperatur {temp}!</h2>
    </div>
  );
}

export default Weather;
