import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

function PieChartWithPaddingAngle(props) {
  const { data, type } = props;
  const COLORS1 = ["#00C49F", "gray"];
  const COLORS2 = ["#b80c00", "#00C49F", "#2e01a1", "#fec746"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
        transform: "scale(1.5)",
        height: `${type == "half" ? "170px" : "250px"}`,
      }}
    >
      <PieChart width={200} height={200}>
        {props.children}
        {type === "half" ? (
          <Pie
            stroke=""
            data={data}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            startAngle={180}
            endAngle={0}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS1[index % COLORS1.length]}
              />
            ))}
          </Pie>
        ) : (
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            stroke=""
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS2[index % COLORS2.length]}
              />
            ))}
          </Pie>
        )}
      </PieChart>
    </div>
  );
}

export default PieChartWithPaddingAngle;
