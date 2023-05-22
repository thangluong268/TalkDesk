import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";
import PieChartWithNeedle from "../../component/PieChartWithNeedle";
import Filter from "../../component/Filter";
import Axios from "axios";
import ConvertStringFollowFormat from "../../utils/ConvertStringFollowFormat";
import ConvertTime from "../../utils/ConvertTime";

const ServiceLevel = () => {

  const [dataWaitime, setDataWaittime] = React.useState([]);
  const [dataStatusTime, setDataStatusTime] = React.useState([]);
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/agent/getAllWaitime`).then(
      (response) => {
        setDataWaittime(response.data);
      }
    );
  }, []);
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/agent/getAllStatusTime`).then(
      (response) => {
        setDataStatusTime(response.data);
      }
    );
  }, []);


  const result = dataWaitime.reduce((acc, curr) => {
    const existingItem = acc.find(item => item.month === curr.month);
    if (existingItem) {
      existingItem.waitTime += curr.waitTime;
    } else {
      acc.push({month: curr.month, waitTime: curr.waitTime});
    }
    return acc;
  }, []).sort((a, b) => a.month - b.month);
  

  const sumWaitTime = dataWaitime?.reduce((acc, curr) => {
    return acc + curr.waitTime;
  }, 0);
  const sumStatusTime = dataStatusTime?.reduce((acc, curr) => {
    return acc + curr.statusTime;
  }, 0);

  const dataTimes = [
    {
      value: ConvertTime(sumWaitTime),
      label: "Total Wait Time",
    },
    {
      value: ConvertTime(Math.round(sumWaitTime / dataWaitime.length)),
      label: "Average Wait Time",
    },
    {
      value: ConvertTime(Math.max(...dataWaitime.map((item) => item.waitTime))),
      label: "Longest Wait Time",
    },
    {
      value: ConvertTime(Math.round(sumWaitTime / dataWaitime.length) + 10),
      label: "Average Abandonment Time",
    },
  ];

  const dataStackedBarChart = result.map((item, index) => {
    return {
      name: "Month " + item.month,
      waitTime: item.waitTime,
      barValue: [
        {
          dataKey: "waitTime",
          fill: "#2D88CE",
        },
      ],
    };
  });


  const dataPieChartWithNeedle = [
    { name: "A", value: sumStatusTime, color: "#00CC00" },
    { name: "B", value: sumWaitTime, color: "#CC0000" },
  ];

  return (
    <div id="serviceLevel">
      <div className="main-content">
        <Feature2 text="Inbound Service Level Metrics" />

        <div style={{ marginLeft: "40px" }}>
          <Filter />
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
              <p style={{ fontSize: "30px", fontWeight: "600" }}>{ Math.round((sumStatusTime / (sumStatusTime+sumWaitTime))*100) + "%"}</p>
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
