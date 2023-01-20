import React, { useState } from "react";
import axios from 'axios';

export default function Search() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState("");
  function displayTemperature(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "55fa6bb8ce9106cc7e720db05b9549dd";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(displayTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
      <br />
      <div></div>
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature :{Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt="weather" />
          </li>
        </ul>
        
      </div>
    );
  } else {
    return form;
  }
}