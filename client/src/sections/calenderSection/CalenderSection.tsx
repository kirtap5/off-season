import React from "react";
import "./CalenderSection.scss";
import { Calender } from "../../components/calender/Calender";
import { CheckpointInput } from "../../components/checkpointInput/CheckpointInput";

export const CalenderSection = () => {
  return (
    <div className="calenderSection">
      <Calender />
      <CheckpointInput />
    </div>
  );
};
