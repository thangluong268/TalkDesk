import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";

const Agents = () => {
  const filters = [
    {
      label: "Filter by Ring Group",
      name: "filterByRingGroup",
      value: ["All ring groups", "agents 2", "agents 3"],
    },
  ];

  const dataStatusOfAgents = [
    {
      color: "#00FF00",
      status: "Available",
      time: "58:07:07",
    },
    {
      color: "#FF0000",
      status: "On a Call",
      time: "17:30:50",
    },
    {
      color: "#CC0000",
      status: "After Call Work",
      time: "00:25:12",
    },
    {
      color: "#FF9933",
      status: "Away",
      time: "21:12:00",
    },
    {
      color: "#A0A0A0",
      status: "Offline",
      time: "03:48:50",
    },
  ];

  const dataStackedBarChart = [
    {
      name: "Step 14",
      agent1: 2,
      agent2: 25,
      agent3: 15,
      agent4: 5,
      barValue: [
        {
          dataKey: "agent1",
          fill: "#0066CC",
        },
        {
          dataKey: "agent2",
          fill: "#00CC00",
        },
        {
          dataKey: "agent3",
          fill: "#FF8000",
        },
        {
          dataKey: "agent4",
          fill: "#CC0000",
        },
      ],
    },
    {
      name: "Step 15",
      agent1: 2,
      agent2: 24,
      agent3: 13,
      agent4: 8,
    },
    {
      name: "Step 16",
      agent1: 1,
      agent2: 21,
      agent3: 13,
      agent4: 8,
    },
    {
      name: "Step 17",
      agent1: 1,
      agent2: 4,
      agent3: 0,
      agent4: 2,
    },
    {
      name: "Step 18",
      agent1: 0,
      agent2: 4,
      agent3: 0,
      agent4: 1,
    },
    {
      name: "Step 19",
      agent1: 2,
      agent2: 22,
      agent3: 12,
      agent4: 8,
    },
    {
      name: "Step 20",
      agent1: 1,
      agent2: 27,
      agent3: 15,
      agent4: 9,
    },
  ];

  const dataFooter = [
    "Outbound Calls",
    "Inbound Calls",
    "Avg. Speed to Answer",
    "Avg. Duration",
  ];

  return (
    <div id="agents">
      <div className="main-content">
        <Feature2 text="Agent Metrics" />

        <div style={{ display: "flex", padding: "0 60px 40px 40px" }}>
          {/* display filter */}
          {filters.map((filter, index) => {
            return (
              <div style={{ paddingRight: "80px" }}>
                <label for={filter.name}>{filter.label}</label>
                <br></br>
                <select
                  name={filter.name}
                  id={filter.name}
                  style={{ width: "240px", height: "30px", fontSize: "14px" }}
                >
                  {filter.value.map((optionValue, optionIndex) => {
                    return <option value={optionValue}>{optionValue}</option>;
                  })}
                </select>
              </div>
            );
          })}
        </div>

        {/* display Chart */}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          {/* display Stacked Bar Chart */}
          <StackedBarChart
            data={dataStackedBarChart}
            title="Number of Agents"
            styleChart={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#E0E0E0",
              padding: "100px 100px 40px 0px",
              margin: "0 0px 10px 40px",
              width: "1000px",
              height: "600px",
            }}
            styleTitle={{
              fontSize: "18px",
              position: "relative",
              left: "280px",
              top: "-40px",
              margin: "0 0 0 -200px",
            }}
          />

          {/* display status of Agents */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {dataStatusOfAgents.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    margin: "0 140px 0 40px",
                    width: "300px",
                  }}
                >
                  <i
                    class="fa-solid fa-circle"
                    style={{ color: item.color, margin: "16px -60px 0 0" }}
                  ></i>
                  <p>{item.status}</p>
                  <p style={{ fontSize: "24px", marginTop: "10px" }}>
                    {item.time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {dataFooter.map((value) => {
            return <p style={{ padding: "40px 100px 100px 0" }}>{value}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Agents;
