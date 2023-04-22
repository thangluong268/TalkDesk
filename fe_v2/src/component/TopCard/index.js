import React from "react";
import "./index.css";
import Icon from "../Icon";

const TopCard = (props) => {
  const { title, text, iconClass, icon } = props;
  const style = {
    paddingRight: "8px",
    color: !iconClass.includes("clock") && "rgb(0, 196, 159)",
    fontSize: !iconClass.includes("clock") && "10px",
  };
  return (
    <div className="topCard">
      <div className="topCard-left">
        <p className="title">{title}</p>
        <div className="status">
          <i style={style} class={`${iconClass}`}></i>
          <p>{text}</p>
        </div>
      </div>

      <div className="topCard-right">
        <div className="icons">
          {icon.map((item) => {
            return (
              <>
                <Icon
                  iconClass={item.iconClass}
                  marginLeftValue={item.marginLeftValue}
                />
                {item.status}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCard;
