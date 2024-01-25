import React, { useState } from "react";
import "./Calender.scss";

const monthNames = [
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

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrenthDate] = useState(new Date().getDate());

  return (
    <div className="calender">
      <h2 className="heading">{monthNames[currentMonth]}</h2>
      <div className="sevenColGrid ">
        {getSortedDays(currentYear, currentMonth).map((day, idx) => (
          <p key={idx}>{day}</p>
        ))}
      </div>
      <div className="sevenColGrid">
        {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map(
          (day, idx) => (
            <p
              key={idx}
              className={
                day === currentDate
                  ? "dayNode currentDate"
                  : day < currentDate
                  ? "dayNode pastDate"
                  : "dayNode"
              }
            >
              {day}
            </p>
          )
        )}
      </div>
    </div>
  );
};

const getNumberOfDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getSortedDays = (year: number, month: number) => {
  // const dayIndex = getNumberOfDaysInMonth(year, month);
  const dayIndex = new Date(year, month, 1).getDay();
  const firstHalf = dayNames.slice(dayIndex);
  return [...firstHalf, ...dayNames.slice(0, dayIndex)];
};

const range = (start: number, end: number) => {
  const length = Math.abs((end - start) / 1);

  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: start }
  );
  return result;
};
