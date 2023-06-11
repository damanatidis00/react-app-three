import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ForecastDay from "./ForecastDay.js";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="Weather-Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "t3b440bad7o6b9c0b3f432b3e3d4d1d5";
    const apiUrl = `https:api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
