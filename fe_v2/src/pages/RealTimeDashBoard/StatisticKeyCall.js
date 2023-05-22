import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";
import Axios from "axios";
const StatisticKeyCall = () => {
  const [keyAndQuantityInCalls, setKeyAndQuantityInCalls] = React.useState([]);
  React.useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_API}/agent/getKeyAndQuantityInCalls`
    ).then((response) => {
      setKeyAndQuantityInCalls(response.data);
    });
  }, []);

  const dataStackedBarChart = Object.entries(keyAndQuantityInCalls).map(
    ([key, value]) => {
      return {
        name: key,
        Quantity: value,
        barValue: [
          {
            dataKey: "Quantity",
            fill: "#19A7CE",
          },
        ],
      };
    }
  );

  return (
    <div id="statisticKeyCall">
      <div className="main-content">
        <Feature2 text="Statistic Key Calls" />

        {/* display Chart */}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {/* display Stacked Bar Chart */}
          <StackedBarChart
            data={dataStackedBarChart}
            title="STATISTIC KEY CALLS"
            styleChart={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#E0E0E0",
              padding: "100px 0px 40px 0px",
              margin: "0 0px 10px 20px",
              width: "100%",
              height: "600px",
              position: "relative",
            }}
            styleTitle={{
              fontSize: "30px",
              fontBold: "bold",
              position: "absolute",
              width: "500px",
              left: "55%",
              top: "5%",
              margin: "0 0 0 -200px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticKeyCall;
