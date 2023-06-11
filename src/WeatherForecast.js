import React from "react";
import axios from "axios";
import "./App.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  const apiKey = "t3b440bad7o6b9c0b3f432b3e3d4d1d5";
  const apiUrl = `https:api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather-Forecast">
      <div className="row"></div>
      <div className="col">
        <div className="forecast-day">Thursday</div>
        <div className="weather-icon">TempIcon</div>
        <div className="forecast-temp">Temp</div>
      </div>
    </div>
  );
}
