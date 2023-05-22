import React from "react";
import "./index.css";
import Button from "../../../component/Button";
import Axios from "axios";
import RemoveSpecialCharacters from "../../../utils/RemoveSpecialCharacters";

const AddAgent = (props) => {
  const [newAgent, setNewAgent] = React.useState({
    name: "",
    ringGroup: "",
    status: "",
    statusTime: "",
    waitTime: "",
    phone: "",
    month: "",
    content: "",
  });

  const [ringGroup, setRingGroup] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/agent/getAllRingGroup`)
      .then((res) => {
        setRingGroup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addAgent = (e) => {
    var myDivs = document.querySelectorAll(".ringgroup");
    var arr = [];
    for (var i = 0; i < myDivs.length; i++) {
      if (myDivs[i].classList.contains("active")) {
        arr.push(myDivs[i].textContent);
      }
    }
    newAgent.ringGroup = arr + "";
    Axios.post(`${process.env.REACT_APP_API}/agent/addAgent`, newAgent)
      .then((res) => {
        alert("Thêm thành công");
        setNewAgent({
          name: "",
          ringGroup: "",
          status: "",
          statusTime: "",
          waitTime: "",
          phone: "",
          month: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const button = [
    {
      name: "Thêm Agent",
      type: 1,
      onClick: () => addAgent(),
    },
    {
      name: "Hủy",
      type: 2,
      onClick: () => {
        props.handleSet(RemoveSpecialCharacters("Admin"));
      },
    },
  ];

  const ClickRingGroup = (e) => {
    var myDivs = document.querySelectorAll(".ringgroup");
    for (var i = 0; i < myDivs.length; i++) {
      if (myDivs[i].textContent == e.target.innerHTML) {
        if (myDivs[i].classList.contains("active")) {
          myDivs[i].classList.remove("active");
        } else {
          myDivs[i].classList.add("active");
        }
      }
    }
  };

  return (
    <div class="input__container">
      <div className="input__label__container">
        <label class="input__label">Name</label>
        <input
          placeholder="Nhập name"
          class="input"
          name="name"
          type="text"
          value={newAgent.name}
          onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Ring Group</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {ringGroup.map((item, index) => {
            return (
              <div
                style={{
                  padding: "10px",
                  background: "#f3f9ff",
                  cursor: "pointer",
                }}
                onClick={(e) => ClickRingGroup(e)}
                className="ringgroup"
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="input__label__container">
        <label class="input__label">Status</label>
        <input
          placeholder="Nhập Status"
          class="input"
          name="status"
          type="number"
          value={newAgent.status}
          onChange={(e) => setNewAgent({ ...newAgent, status: e.target.value })}
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Status Time</label>
        <input
          placeholder="Nhập Status Time"
          class="input"
          name="statusTime"
          type="number"
          value={newAgent.statusTime}
          onChange={(e) =>
            setNewAgent({ ...newAgent, statusTime: +e.target.value })
          }
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Wait Time</label>
        <input
          placeholder="Nhập Wait Time"
          class="input"
          name="waitTime"
          type="number"
          value={newAgent.waitTime}
          onChange={(e) =>
            setNewAgent({ ...newAgent, waitTime: +e.target.value })
          }
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Phone</label>
        <input
          placeholder="Nhập Phone"
          class="input"
          name="phone"
          type="text"
          value={newAgent.phone}
          onChange={(e) => setNewAgent({ ...newAgent, phone: e.target.value })}
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Month</label>
        <input
          placeholder="Nhập Month"
          class="input"
          name="month"
          type="number"
          value={newAgent.month}
          onChange={(e) => setNewAgent({ ...newAgent, month: +e.target.value })}
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Content</label>
        <textarea
          placeholder="Nhập nội dung"
          class="input"
          name="content"
          type="text"
          value={newAgent.content}
          onChange={(e) =>
            setNewAgent({ ...newAgent, content: e.target.value })
          }
        ></textarea>
      </div>

      <div style={{ margin: "20px 0 0 -20px" }}>
        {button.map((item) => {
          return (
            <Button text={item.name} type={item.type} onClick={item.onClick} />
          );
        })}
      </div>
    </div>
  );
};

export default AddAgent;
