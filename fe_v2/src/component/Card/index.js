import React from "react";
import TopCard from "../../component/TopCard";
import "./index.css";
function Card(props) {
  return (
    <div className="cpn-card">
      <TopCard
        title={props.title}
        text={props.text || "Today"}
        iconClass={props.iconClass || "fa-regular fa-clock"}
        icon={[
          {
            iconClass: "fa-solid fa-magnifying-glass",
            marginLeftValue: "20px",
          },
          {
            iconClass: "fa-solid fa-align-center",
            marginLeftValue: "20px",
            status: (
              <i
                class="fa-solid fa-circle"
                style={{
                  color: "rgb(37 130 244)",
                  position: "absolute",
                  top: "25px",
                  right: "5px",
                  fontSize: "10px",
                }}
              ></i>
            ),
          },
        ]}
      />
      {props.children}
    </div>
  );
}

export default Card;
