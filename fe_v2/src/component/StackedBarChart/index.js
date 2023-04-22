import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StackedBarChart = (props) => {
  const { data, title, styleChart, styleTitle, isChangeLegend } = props;
  // const legendStyle = isChangeLegend ?
  //     < Legend
  //         layout='vertical'
  //         align='right'
  //         wrapperStyle={{
  //             background: "#A0A0A0",
  //             padding: "20px 0 0 0",
  //             margin: "1000px -100px 300px 600px",
  //             display: "flex",
  //             alignContent: "center",
  //             justifyContent: "center"
  //         }}
  //     />
  //     : <Legend />

  return (
    <div style={styleChart}>
      <p style={styleTitle}>{title}</p>
      <ResponsiveContainer>
        <BarChart
          width={1600}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 60,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* {legendStyle} */}
          {data[0].barValue.map((value) => {
            return (
              <Bar dataKey={value.dataKey} stackId="only" fill={value.fill} />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
