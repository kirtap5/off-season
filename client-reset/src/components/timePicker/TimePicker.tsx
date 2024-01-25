import React, { useState, useRef } from "react";
import "./TimePicker.scss";

const TimePicker: React.FC = () => {
  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(0);

  const [isHourActive, setIsHourActive] = useState(false);
  const [isMinuteActive, setIsMinuteActive] = useState(false);

  const hourSelectorRef = useRef<HTMLDivElement>(null);
  const minuteSelectorRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>, type: string) => {
    let container;
    if (type == "hour") {
      container = hourSelectorRef.current;
    } else {
      container = minuteSelectorRef.current;
    }

    if (!container) {
      return;
    }

    container.scrollLeft += e.deltaY;
  };
  const renderHourSelector = () => {
    const hours = Array.from({ length: 24 }, (_, index) => index + 1);
    const hourElements = hours.map((hour) => (
      <h3
        key={hour}
        className="selectorValue"
        onClick={() => {
          setHour(hour);
          setIsHourActive(false);
        }}
      >
        {hour}
      </h3>
    ));

    return <div className="hourSelector">{hourElements}</div>;
  };
  const renderMinuteSelector = () => {
    const minutes = Array.from({ length: 12 }, (_, index) => index * 5);
    const hourElements = minutes.map((minute) => (
      <h3
        key={minute}
        className="selectorValue"
        onClick={() => {
          setMinute(minute);
          setIsMinuteActive(false);
        }}
      >
        {minute}
      </h3>
    ));

    return <div className="hourSelector">{hourElements}</div>;
  };

  return (
    <div className="timePicker">
      <div className="digitWrapper">
        <div
          className="digitContainer"
          onClick={() => {
            setIsMinuteActive(false);
            setIsHourActive(!isHourActive);
          }}
        >
          <h3>{hour}</h3>
        </div>
        <div
          className="selectorContainer"
          ref={hourSelectorRef}
          onWheel={(e) => handleScroll(e, "hour")}
        >
          {isHourActive ? renderHourSelector() : null}
        </div>
      </div>
      <div className="separator">
        <h3>:</h3>
      </div>
      <div className="digitWrapper">
        <div
          className="digitContainer"
          onClick={() => {
            setIsHourActive(false);
            setIsMinuteActive(!isMinuteActive);
          }}
        >
          <h3>{minute < 10 ? `0${minute}` : minute}</h3>
        </div>
        <div
          className="selectorContainer"
          ref={minuteSelectorRef}
          onWheel={(e) => handleScroll(e, "minute")}
        >
          {isMinuteActive ? renderMinuteSelector() : null}
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
