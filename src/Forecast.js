import React, { useState } from "react";
import axios from "axios";

export default function Forecast() {
  const [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setTemperature(Math.round(response.data.temperature.current));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container border justify-content-center">
        <div className="row">
          <div className="col">
            <h1 id="city">New York City</h1>
            <h2 id="date">Saturday, October 15th, 2022</h2>
            <h3 id="time">9:52PM</h3>
            <ul className="weather-description">
              <li id="description">Description</li>
              <li id="wind">Wind</li>
              <li id="humidity">Humidity</li>
            </ul>
          </div>

          <div className="col gx-0 justify-content-center">
            <div className="row justify-content-center">
              <div className="col">
                <p className="sun-emoji" id="weather-icon">
                  ☀️
                </p>
              </div>
              <div className="col justify-content-center">
                <h2 id="temp-display" className="justify-content-center">
                  <span className="justify-content-center" id="temperature">
                    {temperature}
                  </span>
                  <a
                    className="temp-indicator active"
                    href="https://www.google.com/"
                    id="celcius-indicator"
                  >
                    ℃
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col" id="weather-card"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "t3b440bad7o6b9c0b3f432b3e3d4d1d5";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}
      &key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
