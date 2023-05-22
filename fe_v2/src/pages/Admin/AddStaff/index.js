import React from "react";
import Button from "../../../component/Button";
import Axios from "axios";
import RemoveSpecialCharacters from "../../../utils/RemoveSpecialCharacters";

const AddStaff = (props) => {
  const staff = JSON.parse(localStorage.getItem("staff"));
  const [inforStaff, setInforStaff] = React.useState({
    name: staff?.name || "",
    email: staff?.email || "",
    password: staff?.password || "",
  });

  const isAdd = localStorage.getItem("Mode") === "Add";

  const addStaff = (e) => {
    Axios.post(`${process.env.REACT_APP_API}/admin/addStaff`, inforStaff)
      .then((res) => {
        alert("Thêm nhân viên thành công");
        props.handleSet(RemoveSpecialCharacters("Admin"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editStaff = (e) => {
    Axios.put(
      `${process.env.REACT_APP_API}/admin/editStaff/${staff._id}`,
      inforStaff
    )
      .then((res) => {
        alert("Chỉnh sửa nhân viên thành công");
        props.handleSet(RemoveSpecialCharacters("Admin"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const button = [
    {
      name: isAdd ? "Thêm nhân viên" : "Cập nhật",
      type: 1,
      onClick: isAdd ? () => addStaff() : () => editStaff(),
    },
    {
      name: "Hủy",
      type: 2,
      onClick: () => {
        localStorage.removeItem("Mode");
        props.handleSet(RemoveSpecialCharacters("Admin"));
      },
    },
  ];

  return (
    <div class="input__container">
      <div className="input__label__container">
        <label class="input__label">Họ Tên</label>
        <input
          placeholder="Nhập họ và tên"
          class="input"
          name="name"
          type="text"
          value={inforStaff.name}
          onChange={(e) =>
            setInforStaff({ ...inforStaff, name: e.target.value })
          }
        ></input>
      </div>
      <div className="input__label__container">
        <label class="input__label">Email</label>
        <input
          placeholder="Nhập email"
          class="input"
          name="email"
          type="email"
          value={inforStaff.email}
          onChange={(e) =>
            setInforStaff({ ...inforStaff, email: e.target.value })
          }
        ></input>
      </div>
      <div className="input__label__container">
        <label class="input__label">Mật khẩu</label>
        <input
          placeholder="Nhập mật khẩu"
          class="input"
          name="password"
          readOnly={!isAdd}
          type="password"
          value={inforStaff.password}
          onChange={(e) =>
            setInforStaff({ ...inforStaff, password: e.target.value })
          }
        ></input>
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

export default AddStaff;
