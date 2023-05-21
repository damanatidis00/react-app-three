import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import FormattedTime from "./FormattedTime.js";
export default function Forecast(props) {
  const [city, setCity] = useState(props.defaultCity);

  const [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}.png`,
    });

    setReady(true);
  }

  function search() {
    const apiKey = "t3b440bad7o6b9c0b3f432b3e3d4d1d5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}
      &key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <input
                type="search"
                className="searchbar col"
                id="form1"
                placeholder="Search city or zipcode"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                className="searchbutton .btn-outline-secondary col-2"
                id="searchButton"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="container border justify-content-center">
          <div className="row">
            <div className="col">
              <h1 id="city">{weatherData.city}</h1>
              <h2 id="date">
                <FormattedDate date={weatherData.date} />
              </h2>
              <h3 id="time">
                <FormattedTime date={weatherData.date} />
              </h3>
              <ul className="weather-description">
                <li id="description">{weatherData.description}</li>
                <li id="wind">Wind: {weatherData.wind}</li>
                <li id="humidity">Humidity: {weatherData.humidity}</li>
              </ul>
            </div>

            <div className="col gx-0 justify-content-center">
              <div className="row justify-content-center">
                <div className="col">
                  <img
                    className="sun-emoji"
                    id="weather-icon"
                    src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}.png`}
                    alt={weatherData.description}
                  />
                </div>
                <div className="col justify-content-center">
                  <h2 id="temp-display" className="justify-content-center">
                    <span className="justify-content-center" id="temperature">
                      {weatherData.temperature}
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
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
