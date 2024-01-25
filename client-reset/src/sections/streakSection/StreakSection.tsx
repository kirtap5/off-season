import React, { useEffect, useState } from "react";
import "./StreakSection.scss";
import { getDailies } from "../../services/apiServices";
import { Token } from "../../components/token/Token";

export const StreakSection = () => {
  const [dailiesData, setDailiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDailiesData(await getDailies());
        console.log("Dalies Data: ", dailiesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  const dummy_data = [
    {
      label: "Code",
      value: 14,
      isToken: true,
    },
    {
      label: "Workout",
      value: 12,
      isToken: true,
    },
    {
      label: "Rehab",
      value: 4,
      isToken: true,
    },
    {
      label: "Total Workouts",
      value: 129,
      isToken: false,
    },
  ];
  return (
    <div className="streakSection">
      <div className="ProgressDisplay">
        <h2 className="title">Streak</h2>
        {dummy_data.map((node, idx) => {
          return (
            <div key={idx} className="categoryContainer">
              <h1>{node.value}</h1>
              <p className="smallText">
                {node.label} {node.isToken ? "Streak" : null}
              </p>
            </div>
          );
        })}
      </div>
      <div className="tokenSection">
        <h2 className="title">Dailies:</h2>
        <div className="tokenContainer">
          {dummy_data.map((node, idx) => {
            return node.isToken ? <Token key={idx} label={node.label} /> : null;
          })}
        </div>
        <p className="alertText">Important! Daliy Quests will reset 13:12:20</p>
      </div>
    </div>
  );
};
