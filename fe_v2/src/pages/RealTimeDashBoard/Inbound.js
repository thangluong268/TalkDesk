import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";

const Inbound = () => {
  const filters = [
    {
      label: "Filter by Ring Group",
      name: "filterByRingGroup",
      value: ["agents", "agents 2", "agents 3"],
    },

    {
      label: "Filter by Phone Number",
      name: "filterByPhoneNumber",
      value: ["All phone numbers", "Phone number 1", "Phone number 2"],
    },
  ];

  const dataLiTag = ["Total", "Answered", "Missed", "Abandoned", "Voicemail"];

  const dataCalls = [
    {
      value: "2419",
      label: "Total Calls",
    },
    {
      value: "1196",
      label: "Answered Calls",
    },
    {
      value: "472",
      label: "Missed Calls",
    },
    {
      value: "233",
      label: "Abandoned Calls",
    },
    {
      value: "274",
      label: "Short Abandoned Calls",
    },
    {
      value: "320",
      label: "Voicemail",
    },
  ];

  const dataStackedBarChart = [
    {
      name: "Page A",
      totalCalls: 2363,
      answeredCalls: 1157,
      missedCalls: 452,
      abandonedCalls: 220,
      shortAbandonedCalls: 256,
      voicemail: 296,
      barValue: [
        {
          dataKey: "totalCalls",
          fill: "#00994C",
        },
        {
          dataKey: "answeredCalls",
          fill: "#82ca9d",
        },
        {
          dataKey: "missedCalls",
          fill: "#00FF80",
        },
        {
          dataKey: "abandonedCalls",
          fill: "#FF9933",
        },
        {
          dataKey: "shortAbandonedCalls",
          fill: "#CC0000",
        },
        {
          dataKey: "voicemail",
          fill: "#006633",
        },
      ],
    },
    {
      name: "Page B",
      totalCalls: 2363,
      answeredCalls: 1157,
      missedCalls: 452,
      abandonedCalls: 2200,
      shortAbandonedCalls: 256,
      voicemail: 296,
    },
    {
      name: "Page C",
      totalCalls: 2363,
      answeredCalls: 1157,
      missedCalls: 452,
      abandonedCalls: 2710,
      shortAbandonedCalls: 256,
      voicemail: 296,
    },
    {
      name: "Page D",
      totalCalls: 2363,
      answeredCalls: 1157,
      missedCalls: 452,
      abandonedCalls: 1120,
      shortAbandonedCalls: 256,
      voicemail: 296,
    },
    {
      name: "Page E",
      totalCalls: 2363,
      answeredCalls: 1157,
      missedCalls: 452,
      abandonedCalls: 220,
      shortAbandonedCalls: 256,
      voicemail: 296,
    },
    {
      name: "Page F",
      totalCalls: 2363,
      answeredCalls: 1157,
      missedCalls: 452,
      abandonedCalls: 220,
      shortAbandonedCalls: 256,
      voicemail: 296,
    },
  ];

  return (
    <div id="inbound">
      <div className="main-content">
        <Feature2 text="Inbound Call Metrics" />

        <div
          style={{
            display: "flex",
            padding: "0 60px 40px 40px",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex" }}>
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

          {/* display navbar-feature2 */}
          <div>
            <ul className="navbar-feature2">
              {dataLiTag.map((dataLi) => {
                return <li style={{ color: "rgb(0, 187, 255)" }}>{dataLi}</li>;
              })}
            </ul>
          </div>
        </div>

        {/* display Calls */}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {dataCalls.map((dataCall) => {
            return (
              <div style={{ padding: "0 60px 0 60px" }}>
                <p style={{ fontSize: "30px", fontWeight: "600" }}>
                  {dataCall.value}
                </p>
                <div
                  style={{
                    display: "flex",
                    marginTop: "-20px",
                    paddingBottom: "60px",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>{dataCall.label}</p>
                  <i
                    class="fa-solid fa-circle-info"
                    style={{ color: "#c0c0c0", padding: "10px 0 0 10px" }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        {/* display Stacked Bar Chart */}
        <StackedBarChart
          data={dataStackedBarChart}
          title="Number of Inbound Calls"
          styleChart={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#E0E0E0",
            padding: "100px 0px 40px 0px",
            height: "500px",
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
  );
};

export default Inbound;
