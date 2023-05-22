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
          {data[0]?.barValue.map((value) => {
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
