import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";
import PieChartWithNeedle from "../../component/PieChartWithNeedle";

const ServiceLevel = () => {
  const filters = [
    {
      label: "Filter by Ring Group",
      name: "filterByRingGroup",
      value: ["All ring groups", "agents 2", "agents 3"],
    },

    {
      label: "Filter by Phone Number",
      name: "filterByPhoneNumber",
      value: ["All phone numbers", "Phone number 1", "Phone number 2"],
    },
  ];

  const dataTimes = [
    {
      value: "86:18:34",
      label: "Total Wait Time",
    },
    {
      value: "01:27",
      label: "Average Wait Time",
    },
    {
      value: "15:08",
      label: "Longest Wait Time",
    },
    {
      value: "01:46",
      label: "Average Abandonment Time",
    },
  ];

  const dataStackedBarChart = [
    {
      name: "Sep 14",
      waitTime: 40,
      barValue: [
        {
          dataKey: "waitTime",
          fill: "#2D88CE",
        },
      ],
    },
    {
      name: "Sep 15",
      waitTime: 50,
    },
    {
      name: "Sep 16",
      waitTime: 52,
    },
    {
      name: "Sep 17",
      waitTime: 100,
    },
    {
      name: "Sep 18",
      waitTime: 100,
    },
    {
      name: "Sep 19",
      waitTime: 70,
    },
    {
      name: "Sep 20",
      waitTime: 45,
    },
  ];

  const dataPieChartWithNeedle = [
    { name: "A", value: 111.6, color: "#00CC00" },
    { name: "B", value: 68.4, color: "#CC0000" },
  ];

  return (
    <div id="serviceLevel">
      <div className="main-content">
        <Feature2 text="Inbound Service Level Metrics" />

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

        {/* display Calls */}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {dataTimes.map((dataTime) => {
            return (
              <div style={{ padding: "0 100px 0 100px" }}>
                <p style={{ fontSize: "30px", fontWeight: "600" }}>
                  {dataTime.value}
                </p>
                <div
                  style={{
                    display: "flex",
                    marginTop: "-20px",
                    paddingBottom: "60px",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>{dataTime.label}</p>
                  <i
                    class="fa-solid fa-circle-info"
                    style={{ color: "#c0c0c0", padding: "10px 0 0 10px" }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        {/* display Chart */}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {/* display Pie Chart With Needle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <PieChartWithNeedle data={dataPieChartWithNeedle} />
            <div style={{ padding: "0 0 0 100px", margin: "-290px 0 0 20px" }}>
              <p style={{ fontSize: "30px", fontWeight: "600" }}>62 %</p>
              <div
                style={{
                  display: "flex",
                  marginTop: "-20px",
                  paddingBottom: "60px",
                }}
              >
                <p style={{ fontSize: "12px" }}>Service Level</p>
                <i
                  class="fa-solid fa-circle-info"
                  style={{ color: "#c0c0c0", padding: "10px 0 0 10px" }}
                ></i>
              </div>
            </div>
          </div>

          {/* display Stacked Bar Chart */}
          <StackedBarChart
            data={dataStackedBarChart}
            title="Inbound Service Level"
            styleChart={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#E0E0E0",
              padding: "100px 0px 40px 0px",
              margin: "0 0px 10px 20px",
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
        </div>
      </div>
    </div>
  );
};

export default ServiceLevel;
