import React from "react";
import "./index.css";

const Button = (props) => {
  const { text, type, onClick } = props;
  const typeOfButton = type === 1 ? "main" : "sub";
  return (
    <div className={`button-${typeOfButton}`} onClick={(e) => onClick()}>
      <span className={`transition-${typeOfButton}`}></span>
      <span className={`gradient-${typeOfButton}`}></span>
      <span className={`label-${typeOfButton}`}>{text}</span>
    </div>
  );
};

export default Button;
