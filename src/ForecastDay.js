import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="weather-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        ></img>
      </div>
      <div className="forecast-temp">
        <span>{maxTemperature()}</span> <span> | </span>{" "}
        <span>{minTemperature()}</span>
      </div>
    </div>
  );
}
