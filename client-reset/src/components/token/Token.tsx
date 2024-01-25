import React, { useState } from "react";
import { ReactComponent as CheckmarkIcon } from "../../assets/images/CheckmarkIcon.svg";
import "./Token.scss";

interface IToken {
  label: string;
}

export const Token: React.FC<IToken> = ({ label }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="token">
      <a
        onClick={() => setIsActive(true)}
        href="#"
        className={isActive ? "btn isClicked" : "btn"}
      >
        <CheckmarkIcon
          className={isActive ? "isClicked checkmark" : "checkmark"}
        />
      </a>
      <p className="label">{label}</p>
    </div>
  );
};
