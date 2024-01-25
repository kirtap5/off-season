import React from "react";
import "./TimelineSection.scss";
import CheckPoint from "./CheckPoint";
//detta interface borde skrivas in i backend sen, som en mongoose model.
type CeckpointType = {
  isEven?: boolean;
  label: string;
  time?: Date;
};

const TimelineSection = () => {
  const checkpoints = [
    {
      label: "First Checkpoint",
    },
    {
      label: "Second Checkpoint",
    },
    {
      label: "Thrid Checkpoint",
    },
    {
      label: "Fourth Checkpoint",
    },
  ];
  return (
    <div className="TimelineSection">
      <div className="line"></div>
      {checkpoints.map((item, index) => {
        return <CheckPoint label={item.label} isEven={(index + 1) % 2 == 0} />;
      })}
    </div>
  );
};

export default TimelineSection;
