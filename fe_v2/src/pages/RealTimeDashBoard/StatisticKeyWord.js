import React from "react";
import Feature2 from "../../component/Feature2";
import Axios from "axios";

const StatisticKeyWord = () => {
  const [listAgent, setListAgent] = React.useState([]);
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/agent/keywordstatistics`)
      .then((res) => {
        setListAgent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getAgentKeys = () => {
    if (listAgent.length > 0) {
      return [
        "STT",
        "Tên",
        "Nội dung trong cuộc gọi",
        "KeyWord - Số lượng",
      ].map((value) => {
        return <th>{value}</th>;
      });
    } else {
      return (
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Dữ liệu nhân viên chưa được khởi tạo!!!
        </h3>
      );
    }
  };

  const getAgentValues = () => {
    if (listAgent.length > 0) {
      return listAgent.map((agent, indexAgent) => {
        return (
          <tr>
            <td>{indexAgent + 1}</td>
            <td>{agent.name}</td>
            <td>{agent.content}</td>
            <td>
              {agent.count.map((value) => {
                return (
                  <>
                    {" "}
                    <p>
                      {value.key} - {value.quantity}
                    </p>
                    <br></br>
                  </>
                );
              })}
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div id="statisticKeyWord">
      <div className="main-content">
        <Feature2 text="Statistic KeyWords" />
        <div className="container-staff">
          <table className="staff-table">
            <thead>{getAgentKeys()}</thead>
            <tbody>{getAgentValues()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatisticKeyWord;
