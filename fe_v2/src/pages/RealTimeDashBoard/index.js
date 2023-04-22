import React from "react";
import SubNavbar from "../../component/SubNavbar";
import Feature from "../../component/Feature";
import Live from "./Live";
import Inbound from "./Inbound";
import ServiceLevel from "./ServiceLevel";
import Agents from "./Agents";
import Numbers from "./Numbers";

function RealTimeDashBoard() {
  const [eleNavbar, setEleNavbar] = React.useState("Live");
  const dict = {
    Live: { src: <Live /> },
    Inbound: { src: <Inbound /> },
    ServiceLevel: { src: <ServiceLevel /> },
    Agents: { src: <Agents /> },
    Numbers: { src: <Numbers /> },
  };
  return (
    <div id="RealTimeDashBoard">
      <div className="main-content">
        <SubNavbar setPage={(data) => setEleNavbar(data)} />
        <Feature
          text="Inbound - General Europe"
          icon={[
            { iconClass: "fa-solid fa-gear", marginLeftValue: "40px" },
            { iconClass: "fa-solid fa-compress", marginLeftValue: "40px" },
          ]}
          button={[
            { name: "Edit", type: 0 },
            { name: "New dashboard", type: 1 },
          ]}
        />
        {dict[eleNavbar].src}
      </div>
    </div>
  );
}

export default RealTimeDashBoard;
