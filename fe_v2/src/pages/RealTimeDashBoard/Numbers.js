import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";

const Numbers = () => {
  const filters = [
    {
      label: "Filter by Ring Group",
      name: "filterByRingGroup",
      value: ["All ring groups", "agents 2", "agents 3"],
    },
  ];

  const dataStatusOfAgents = [
    {
      color: "#FF8000",
      infor: "+13474785764 (Customer Support)",
    },
    {
      color: "#0000CC",
      infor: "+16506662103 (Billing)",
    },
    {
      color: "#CC0000",
      infor: "+17206084079 (Customer Support)",
    },
    {
      color: "#009900",
      infor: "+17813994788 (Billing)",
    },
    {
      color: "#CCCC00",
      infor: "+19739434580 (Sales Line)",
    },
  ];

  const dataStackedBarChart = [
    {
      name: "Step 14",
      "+13474785764 (Customer Support)": 0,
      "+16506662103(Billing)": 20,
      "+17206084079(Customer Support)": 100,
      "+17813994788(Billing)": 250,
      "+19739434580(Sales Line)": 400,
      barValue: [
        {
          dataKey: "+13474785764 (Customer Support)",
          fill: "#FF8000",
        },
        {
          dataKey: "+16506662103(Billing)",
          fill: "#0000CC",
        },
        {
          dataKey: "+17206084079(Customer Support)",
          fill: "#CC0000",
        },
        {
          dataKey: "+17813994788(Billing)",
          fill: "#009900",
        },
        {
          dataKey: "+19739434580(Sales Line)",
          fill: "#CCCC00",
        },
      ],
    },
    {
      name: "Step 15",
      "+13474785764 (Customer Support)": 0,
      "+16506662103(Billing)": 10,
      "+17206084079(Customer Support)": 100,
      "+17813994788(Billing)": 252,
      "+19739434580(Sales Line)": 390,
    },
    {
      name: "Step 16",
      "+13474785764 (Customer Support)": 0,
      "+16506662103(Billing)": 20,
      "+17206084079(Customer Support)": 104,
      "+17813994788(Billing)": 255,
      "+19739434580(Sales Line)": 410,
    },
    {
      name: "Step 17",
      "+13474785764 (Customer Support)": 0,
      "+16506662103(Billing)": 10,
      "+17206084079(Customer Support)": 50,
      "+17813994788(Billing)": 50,
      "+19739434580(Sales Line)": 0,
    },
    {
      name: "Step 18",
      "+13474785764 (Customer Support)": 0,
      "+16506662103(Billing)": 0,
      "+17206084079(Customer Support)": 20,
      "+17813994788(Billing)": 0,
      "+19739434580(Sales Line)": 0,
    },
    {
      name: "Step 19",
      "+13474785764 (Customer Support)": 0,
      "+16506662103(Billing)": 20,
      "+17206084079(Customer Support)": 100,
      "+17813994788(Billing)": 270,
      "+19739434580(Sales Line)": 390,
    },
    {
      name: "Step 20",
      "+13474785764 (Customer Support)": 0,
      "+16506662103(Billing)": 10,
      "+17206084079(Customer Support)": 110,
      "+17813994788(Billing)": 260,
      "+19739434580(Sales Line)": 400,
    },
  ];

  const dataFooter = ["Service Level", "Inbound Calls", "Outbound Calls"];

  return (
    <div id="numbers">
      <div className="main-content">
        <Feature2 text="Phone Number Metrics" />

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
            backgroundColor: "#E0E0E0",
            margin: "0 60px 0 40px",
          }}
        >
          {/* display Stacked Bar Chart */}
          <StackedBarChart
            data={dataStackedBarChart}
            title="Number of Calls"
            styleChart={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#E0E0E0",
              padding: "100px 40px 40px 0px",
              margin: "0 -20px 10px 40px",
              width: "2000px",
              height: "400px",
            }}
            styleTitle={{
              fontSize: "18px",
              position: "relative",
              left: "280px",
              top: "-40px",
              margin: "0 0 0 -200px",
            }}
          />

          {/* display phone number */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              margin: "60px -80px 0 0",
            }}
          >
            {dataStatusOfAgents.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    margin: "0px 80px 0 0px",
                    width: "400px",
                  }}
                >
                  <p
                    style={{
                      background: "#A0A0A0",
                      color: "#ffffff",
                      height: "30px",
                      margin: "6px 0 0 2px",
                      padding: "10px 6px 0 6px",
                    }}
                  >
                    {item.infor}
                  </p>
                  <i
                    class="fa-solid fa-square"
                    style={{ color: item.color, margin: "18px 20px 0 20px" }}
                  ></i>
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

export default Numbers;
