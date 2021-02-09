import React from "react";

export default function FormattedDate(props) {
  let now = new Date(props.timestamp);
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (minutes < 10) {
    minutes = `0${minutes}`
    }
  return <span className="FormattedDate">{days[day]}, {hours}:{minutes}</span>
}