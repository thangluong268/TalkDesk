import React from "react";
import Card from "../../component/Card";
import PieChartWithPaddingAngle from "../../component/PieChartWithPaddingAngle";
import Table from "../../component/Table";
import TextAndSub from "../../component/TextAndSub";
import Axios from "axios";
import { Legend } from "recharts";
import ConvertTime from "../../utils/ConvertTime";
function Live() {

  const handleDisplayRingGroup = (ringGroup) => {
    let list = ringGroup.split(",");
    const listtemp = list.length > 1 ? Array(2).fill(null) : list;
    const result = listtemp.map((item, index) => {
      return (
        <span
          style={{
            padding: "5px 10px",
            backgroundColor: "rgb(219 219 219)",
            borderRadius: "20px ",
            marginRight: "5px",
          }}
        >
          {list[index]}
        </span>
      );
    });
    list.length > 2 &&
      result.push(
        <span
          style={{
            padding: "5px 10px",
            backgroundColor: "rgb(219 219 219)",
            borderRadius: "20px ",
            marginRight: "5px",
          }}
        >
          {`+${list.length - 2}`}
        </span>
      );
    return result;
  };

  const [listStatus, setListStatus] = React.useState([]);
  const [listAgent, setListAgent] = React.useState([]);
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/statusagent/getAllStatus`).then(
      (response) => {
        setListStatus(response.data);
      }
    );
  }, []);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/agent/getAllAgent`).then(
      (response) => {
        setListAgent(response.data);
      }
    );
  }, []);
 
  const PerCentLive = () => {
    let total = listAgent.length;
    let available = listAgent.filter((item) => item.status == 3).length;
    let percentLive = Math.round((available / total) * 100);
    return percentLive;
  };

  const DataPieChart = () => {
    return listStatus.map((item) => {
      return {
        name: item.name,
        value: listAgent.filter((x) => x.status == item.value).length,
      };
    });
  };

  const DataHalfPieChart = () => {
    return Array(2)
      .fill(null)
      .map((item, index) => {
        return {
          name: "",
          value: listAgent.reduce(
            (accu, curr) =>
              index == 0 ? accu + curr.statusTime : accu + curr.waitTime,
            0
          ),
        };
      });
  };

  const percentHalfPieChart = Math.round(
    (DataHalfPieChart()[0].value /
      (DataHalfPieChart()[0].value + DataHalfPieChart()[1].value)) *
    100
  );

  const handlePercent = (value) => {
    return value - (value % 10);
  };

  const maxWaitTime = () => {
    return Math.max(...listAgent.map((item) => item.waitTime));
  }

  return (
    <div
      style={{
        backgroundColor: "rgb(235 235 235)",
        padding: "20px 10px 0 10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <Card title="Agents total contacts">
          <TextAndSub color="red" text={listAgent.length} subtext="" />
        </Card>
        <Card title="Service level">
          <PieChartWithPaddingAngle type="half" data={DataHalfPieChart()} />
          <TextAndSub
            color="#00C49F"
            text={`${percentHalfPieChart}%`}
            subtext={`>${handlePercent(percentHalfPieChart)}%`}
            isChild={true}
            type="half"
          />
        </Card>
        <Card title="Average wait time">
          <TextAndSub
            color="#00C49F"
            text={ConvertTime(
              Math.round(
                listAgent.reduce((accu, curr) => accu + curr.waitTime, 0) /
                listAgent.length
              )
            )}
            subtext={`<${ConvertTime(
              Math.floor((
                listAgent.reduce((accu, curr) => accu + curr.waitTime, 0) /
                listAgent.length
              )/60)+60
            )}`}
          />
        </Card>
        <Card title="Longest wait time">
          <TextAndSub
            color="#fad685"
            text={ConvertTime(
              Math.max(...listAgent.map((item) => item.waitTime))
            )}
            subtext={`${ConvertTime(maxWaitTime() - maxWaitTime()%60)} - 
            ${ConvertTime((maxWaitTime() - maxWaitTime()%60)+60) }`}
          />
        </Card>
      </div>
      <div style={{ display: "flex" }}>
        <Card title="Live agents" text="Live" iconClass="fa-solid fa-circle">
          <PieChartWithPaddingAngle data={DataPieChart()}>
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                fontSize: "10px",
                width: "300px",
                left: "-25%",
                top: "100%",
              }}
            />
          </PieChartWithPaddingAngle>
          <TextAndSub
            color="#00C49F"
            text={`${PerCentLive()}%`}
            isChild={true}
            hasLegend={"bottom"}
          />
        </Card>
        <Card title="Live agents" text="Live" iconClass="fa-solid fa-circle">
          <Table>
            {listAgent.map((item, index) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{handleDisplayRingGroup(item.ringGroup)}</td>
                  <td>
                    <i
                      class="fa-solid fa-circle"
                      style={{
                        paddingRight: "8px",
                        color: `${listStatus.filter((x) => x.value == item.status)[0]
                            .color
                          }`,
                        fontSize: "10px",
                      }}
                    ></i>
                    {listStatus.filter((x) => x.value == item.status)[0].name}
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{ marginLeft: "5px", fontSize: "10px" }}
                    ></i>
                  </td>
                  <td>{ConvertTime(item.statusTime)}</td>
                  <td style={{ fontWeight: "bold" }}>...</td>
                </tr>
              );
            })}
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default Live;
