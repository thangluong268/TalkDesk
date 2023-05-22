import React from "react";
import Feature2 from "../../component/Feature2";
import StackedBarChart from "../../component/StackedBarChart";
import Filter from "../../component/Filter";
import Axios from "axios";
const Numbers = () => {

  const [listPhoneNumber, setListPhoneNumber] = React.useState([]);
  const [listData, setListData] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/agent/getAllPhoneNumbersAndMonth`)
      .then((response) => {
        setListData(response.data)
        setListPhoneNumber(response.data.map((item) => item.phone).filter((item, index, self) => self.indexOf(item) === index));
      })
      .catch((error) => console.log(error));
  }, []);
  
  console.log(listPhoneNumber)




  const color = ["#FF0000","#FFA500","#FFFF00","#008000","#0000FF", "#800080","#FFC0CB","cyan","#000000","#808080","#F0E68C","#00FF00",];
  
  const dataStatusOfAgents = listPhoneNumber.map((item, index) => {
    return {
      color: color[index],
      infor: item,
    }
  })

  const barValue = listPhoneNumber.map((item, index) => {
    return {
      dataKey: item,
      fill: color[index],
    }
  })


  const reducedData = listData.reduce((acc, { phone, month }) => {
    if (!acc[month]) acc[month] = {};
    if (!acc[month][phone]) acc[month][phone] = 0;
    acc[month][phone]++;
    return acc;
  }, {});
  
  const result = Object.entries(reducedData).map(([month, phones]) => {
    return { ...phones, month };
  });

  const dataStackedBarChart = result.map((item) => {
    return {
      name: "Month" + item.month,
      ...item,
      barValue: barValue
    }
  })
  

  // const dataStackedBarChart = [
  //   {
  //     name: "Step 14",
  //     "+13474785764 (Customer Support)": 0,
  //     "+16506662103(Billing)": 20,
  //     "+17206084079(Customer Support)": 100,
  //     "+17813994788(Billing)": 250,
  //     "+19739434580(Sales Line)": 400,
  //     barValue: barValue
  //   },
  //   {
  //     name: "Step 15",
  //     "+13474785764 (Customer Support)": 0,
  //     "+16506662103(Billing)": 10,
  //     "+17206084079(Customer Support)": 100,
  //     "+17813994788(Billing)": 252,
  //     "+19739434580(Sales Line)": 390,
  //   },
  //   {
  //     name: "Step 16",
  //     "+13474785764 (Customer Support)": 0,
  //     "+16506662103(Billing)": 20,
  //     "+17206084079(Customer Support)": 104,
  //     "+17813994788(Billing)": 255,
  //     "+19739434580(Sales Line)": 410,
  //   },
  //   {
  //     name: "Step 17",
  //     "+13474785764 (Customer Support)": 0,
  //     "+16506662103(Billing)": 10,
  //     "+17206084079(Customer Support)": 50,
  //     "+17813994788(Billing)": 50,
  //     "+19739434580(Sales Line)": 0,
  //   },
  //   {
  //     name: "Step 18",
  //     "+13474785764 (Customer Support)": 0,
  //     "+16506662103(Billing)": 0,
  //     "+17206084079(Customer Support)": 20,
  //     "+17813994788(Billing)": 0,
  //     "+19739434580(Sales Line)": 0,
  //   },
  //   {
  //     name: "Step 19",
  //     "+13474785764 (Customer Support)": 0,
  //     "+16506662103(Billing)": 20,
  //     "+17206084079(Customer Support)": 100,
  //     "+17813994788(Billing)": 270,
  //     "+19739434580(Sales Line)": 390,
  //   },
  //   {
  //     name: "Step 20",
  //     "+13474785764 (Customer Support)": 0,
  //     "+16506662103(Billing)": 10,
  //     "+17206084079(Customer Support)": 110,
  //     "+17813994788(Billing)": 260,
  //     "+19739434580(Sales Line)": 400,
  //   },
  // ];

  const dataFooter = ["Service Level", "Inbound Calls", "Outbound Calls"];

  return (
    <div id="numbers">
      <div className="main-content">
        <Feature2 text="Phone Number Metrics" />

        <div style={{ marginLeft: "40px", marginBottom: "20px" }}>
          <Filter />
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
