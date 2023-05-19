import React from "react";

export default function formatTime(props) {
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let indicator = "AM";
  if (hours > 12) {
    indicator = "PM";
  }
  return (
    <div>
      {hours}:{minutes} {indicator}
    </div>
  );
}
