import React, { useState } from "react";
import "./CommitmentInput.scss";

export const CommitmentInput = () => {
  const [isLocked, setIsLocked] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLocked(!isLocked);
  };

  return (
    <form onSubmit={handleSubmit} className="commitmentInput">
      <input
        placeholder="Enter a new habit..."
        type="text"
        className={isLocked ? "lockedInput input" : "input"}
        disabled={isLocked}
      />
      <div className="container">
        <span
          className={isLocked ? "lock" : "lock unlocked"}
          onClick={() => setIsLocked(!isLocked)}
        ></span>
      </div>
    </form>
  );
};
