import React from "react";
import "./CheckpointInput.scss";
import TimePicker from "../timePicker/TimePicker";

//TODO: SKRIV EN EGEN SELECT MED CUSTOM STYLE
export const CheckpointInput = () => {
  return (
    <div className="checkpointInput">
      <h2>Daily Checkpoints</h2>
      <form>
        <input
          placeholder="Add a checkpoint..."
          type="text"
          className="input"
        />

        <div className="timePicker"></div>
        <TimePicker />
      </form>
      <button className="submitButton">Commit</button>
    </div>
  );
};
