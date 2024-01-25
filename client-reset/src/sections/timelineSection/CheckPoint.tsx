import React from "react";

import "./TimelineSection.scss";

interface CheckPointProps {
  label: string;
  isEven: boolean;
}
// To set label on other side, change css
//grid-row: 1 or 3; for .label oin CheckPoint

//TODO skriv en funktion som beräknar positionen baserat på deadline ellet "time" från en viss checkpoint"

const CheckPoint: React.FC<CheckPointProps> = ({ label, isEven }) => {
  console.log(isEven);
  return (
    <div className="checkPoint">
      <p className={isEven ? `label above` : `label below`}>CheckPoint</p>
      <div className="square"></div>
    </div>
  );
};

export default CheckPoint;
