import React from "react";

export default function Forecast() {
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
                  20
                </span>
                <a
                  className="temp-indicator active"
                  href="#"
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
}
