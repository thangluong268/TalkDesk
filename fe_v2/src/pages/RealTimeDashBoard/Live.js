import React from "react";
import Card from "../../component/Card";
import PieChartWithPaddingAngle from "../../component/PieChartWithPaddingAngle";
import Table from "../../component/Table";
import TextAndSub from "../../component/TextAndSub";
import { Legend } from "recharts";
function Live() {
  const style = {
    paddingRight: "8px",
    color: "rgb(0, 196, 159)",
    fontSize: "10px",
  };
  return (
    <div
      style={{
        backgroundColor: "rgb(235 235 235)",
        padding: "20px 10px 0 10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <Card title="Agents total contacts">
          <TextAndSub color="red" text="241" subtext="" />
        </Card>
        <Card title="Service level">
          <PieChartWithPaddingAngle
            type="half"
            data={[
              { name: "Away", value: 94 },
              { name: "After call work", value: 6 },
            ]}
          />
          <TextAndSub
            color="#00C49F"
            text="94%"
            subtext=">90%"
            isChild={true}
            type="half"
          />
        </Card>
        <Card title="Average wait time">
          <TextAndSub color="#00C49F" text="02:51" subtext="<05:00" />
        </Card>
        <Card title="Longest wait time">
          <TextAndSub color="#fad685" text="09:47" subtext="08:00 - 10:00" />
        </Card>
      </div>
      <div style={{ display: "flex" }}>
        <Card title="Live agents" text="Live" iconClass="fa-solid fa-circle">
          <PieChartWithPaddingAngle
            data={[
              { name: "Busy", value: 26 },
              { name: "After call work", value: 10 },
              { name: "Available", value: 12 },
              { name: "Away", value: 8 },
            ]}
          >
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
            text="94%"
            isChild={true}
            hasLegend={"bottom"}
          />
        </Card>
        <Card title="Live agents" text="Live" iconClass="fa-solid fa-circle">
          <Table>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                  }}
                >
                  Team02
                </span>
                <span
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "rgb(219 219 219)",
                    borderRadius: "20px ",
                    marginRight: "5px",
                    color: "blue",
                  }}
                >
                  +1
                </span>
              </td>
              <td>
                <i class="fa-solid fa-circle" style={style}></i>
                Dom{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ marginLeft: "5px", fontSize: "10px" }}
                ></i>
              </td>
              <td>6000</td>
              <td style={{ fontWeight: "bold" }}>...</td>
            </tr>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default Live;
