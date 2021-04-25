import React from "react";
import "./DayAndTime.css";

export default function DayAndTime(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[props.date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let dateOfMonth = props.date.getDate();

  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="DayAndTime">
      <h5 className="date">
        {weekday}, {month} {dateOfMonth}
      </h5>
      <h6 className="time">
        {hours}:{minutes}
      </h6>
    </div>
  );
}
