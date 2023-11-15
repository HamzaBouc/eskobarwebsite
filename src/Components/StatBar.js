import React, { useState, useEffect } from "react";
import "./StatBar.css";

const StatBar = ({ label, targetPercentage, duration }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= targetPercentage
          ? newPercentage
          : targetPercentage;
      });
    }, duration / targetPercentage);

    return () => clearInterval(interval);
  }, [targetPercentage, duration]);

  return (
    <div className="stat-container">
      <div className="label-and-percentage">
        <span className="stat-label">{label}</span>
        <span className="stat-percentage">{currentPercentage}%</span>
      </div>
      <div className="stat-bar">
        <div
          className="bar-fill"
          style={{ width: `${currentPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StatBar;
