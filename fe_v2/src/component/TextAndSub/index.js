import React from "react";

function TextAndSub(props) {
  const style = {
    textAlign: "center",
    // if props.isChild is true, then marginBottom is 40px, else marginBottom is 0
    position: `${props.isChild ? "absolute" : "unset"}`,
    bottom: `${props.isChild ? "0" : "unset"}`,
    left: `${props.isChild ? "50%" : "unset"}`,
    transform: `${
      props.type != "half" && props.isChild && props.hasLegend == "bottom"
        ? "translate(-48%, -145%)"
        : props.type != "half" && props.isChild
        ? "translate(-48%, -80%)"
        : props.isChild
        ? "translate(-48%, 0)"
        : "unset"
    }`,
  };
  return (
    <div style={style}>
      <div
        style={{
          marginTop: "40px",
          fontSize: `${props.isChild ? "60px" : "80px"}`,
        }}
      >
        {props.text}
      </div>
      <div style={{ color: `${props.color}`, margin: "8px 0 18px 0" }}>
        <b>{props.subtext}</b>
      </div>
    </div>
  );
}

export default TextAndSub;
