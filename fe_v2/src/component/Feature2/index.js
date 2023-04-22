import React from "react";
import "./index.css";

const Feature2 = (props) => {
  const { text } = props;
  return (
    <div className="feature2">
      <p style={{ fontSize: "20px", fontWeight: "550" }}>{text}</p>
      <ul className="navbar-feature2">
        <li>Minute</li>
        <li>Hour</li>
        <li>Day</li>
        <li>Week</li>
        <li>Month</li>
      </ul>
      <input
        className="time-feature"
        type="datetime-local"
        name="timeFeature"
        value="timeFeature"
        minlength="6"
        required
      />
    </div>
  );
};

export default Feature2;
