import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("F");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div>
        <span className="justify-content-center" id="temperature">
          {Math.round(props.celcius)}
        </span>
        <span>
          ℃ |{" "}
          <a href="/" onClick={convertToF}>
            {" "}
            ℉{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <span className="justify-content-center" id="temperature">
          {Math.round(farenheit)}
        </span>
        <span>
          <a href="/" onClick={convertToC}>
            {" "}
            ℃{" "}
          </a>
          | ℉{" "}
        </span>
      </div>
    );
  }
}
