import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";
import Filter from "../../component/Filter";
import Axios from "axios";
import ConvertTime from "../../utils/ConvertTime";
const Agents = () => {

  const [listAgent, setListAgent] = React.useState([]);
  const [listStatus, setListStatus] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/agent/getAllStatus`).then(
      (response) => {
        setListAgent(response.data);
      }
    );
  }, []);
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/statusagent/getAllStatus`).then(
      (response) => {
        setListStatus(response.data);
      }
    );
  }, []);


  // Sum status time follow status
  const aggregatedData = listAgent.reduce((acc, curr) => {
    const index = acc.findIndex((item) => item.status === curr.status);
    if (index === -1) {
      acc.push({ status: curr.status, statusTime: curr.statusTime });
    } else {
      acc[index].statusTime += curr.statusTime;
    }
    return acc;
  }, []);

  const dataStatusOfAgents = aggregatedData.map((item, index) => { 
    console.log(listStatus.filter((item2) => item2.value == item.status)[0])
    return {
      color: listStatus.filter((item2) => item2.value == item.status)[0]?.color,
      status: listStatus.filter((item2) => item2.value == item.status)[0]?.name,
      time: ConvertTime(item.statusTime),
    }
  })


  const reducedData = listAgent.reduce((acc, { status, statusTime, month }) => {
    if (!acc[month]) acc[month] = {};
    if (!acc[month][status]) acc[month][status] = 0;
    acc[month][status] += statusTime;
    return acc;
  }, {});
  
  const result = Object.entries(reducedData).map(([month, statuses]) => {
    return { ...statuses, month };
  });

  const barValue = listStatus.map((item) => {
    return {
      dataKey: listStatus.filter((item2) => item2.value == item.value)[0]?.name,
      fill: item.color,
    };
  });

  const dataStackedBarChart = result.map((item) => {
    // var agent1 = istStatus.filter((item2) => item2.value == item.value)[0]?.name
    // var 
    return {
      name: "Month " + item.month,
      Busy: item["1"],
      "After call work": item["2"],
      Available: item["3"],
      Away: item["4"],
      barValue: barValue,
    };
  });

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
        <div style={{ marginLeft: "40px", marginBottom: "20px" }}>
          <Filter />
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
