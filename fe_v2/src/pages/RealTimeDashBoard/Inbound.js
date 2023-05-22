import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";

import Axios from "axios";
import Filter from "../../component/Filter";
import ConvertStringFollowFormat from "../../utils/ConvertStringFollowFormat";

const Inbound = () => {
  const [dataCall, setDataCall] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/call/getAllCall`).then(
      (response) => {
        setDataCall(response.data);
      }
    );
  }, []);

  
  const result = Object.entries(dataCall.reduce(
    (acc, curr) => ({
      totalCalls: acc.answeredCalls + acc.missedCalls + acc.abandonedCalls + acc.shortAbandonedCalls + acc.voicemail + curr.answeredCalls + curr.missedCalls + curr.abandonedCalls + curr.shortAbandonedCalls + curr.voicemail,
      answeredCalls: acc.answeredCalls + curr.answeredCalls,
      missedCalls: acc.missedCalls + curr.missedCalls,
      abandonedCalls: acc.abandonedCalls + curr.abandonedCalls,
      shortAbandonedCalls: acc.shortAbandonedCalls + curr.shortAbandonedCalls,
      voicemail: acc.voicemail + curr.voicemail,

    }),
    { totalCalls: 0,answeredCalls: 0, missedCalls: 0, abandonedCalls: 0, shortAbandonedCalls: 0, voicemail: 0 }
  ));

  const dataLiTag = ["Total", "Answered", "Missed", "Abandoned", "Voicemail"];
  const color = ["#00994C", "#82ca9d", "#00FF80", "#FF9933", "#CC0000", "#006633"]
  const dataLiTagValue = result.map((item, index) => {
    if (index > 0) {
      return {
        dataKey: result[index][0],
        fill: color[index-1],
      }
    } 
    }).filter(item => item !== undefined)
    
  const dataStackedBarChart = dataCall.map((item, index) => {
    return {
      name: "Month " + item.month,
      totalCalls: item.answeredCalls + item.missedCalls + item.abandonedCalls + item.shortAbandonedCalls + item.voicemail,
      answeredCalls: item.answeredCalls,
      missedCalls: item.missedCalls,
      abandonedCalls: item.abandonedCalls,
      shortAbandonedCalls: item.shortAbandonedCalls,
      voicemail: item.voicemail,
      barValue: dataLiTagValue,
    }
  })
  


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
          <Filter />

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
          {result.map((dataCall) => {
            return (
              <div style={{ padding: "0 60px 0 60px" }}>
                <p style={{ fontSize: "30px", fontWeight: "600" }}>
                  {dataCall[1]}
                </p>
                <div
                  style={{
                    display: "flex",
                    marginTop: "-20px",
                    paddingBottom: "60px",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>{ConvertStringFollowFormat(dataCall[0])}</p>
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
