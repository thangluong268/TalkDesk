import React from "react";
import "./index.css";
import Button from "../../../component/Button";
import Axios from "axios";
import RemoveSpecialCharacters from "../../../utils/RemoveSpecialCharacters";

const DisplayDeletedStaff = (props) => {
  const data = ["", "No", "name", "email", "password", "", ""];
  const [listStaff, setListStaff] = React.useState([]);
  const [isRestore, setIsRestore] = React.useState(false);
  const [isDestroy, setIsDestroy] = React.useState(false);
  const [isDisplayButton, setisDisplayButton] = React.useState(false);

  React.useEffect(() => {
    setisDisplayButton(false);
    Axios.get(`${process.env.REACT_APP_API}/admin/getAllDeletedStaff`)
      .then((res) => {
        setListStaff(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isRestore, isDestroy]);

  const getStaffKeys = () => {
    if (listStaff.length > 0) {
      return data.map((value, index) => {
        if (index == 0)
          return (
            <th>
              <input
                id="checkbox-all"
                type="checkbox"
                onChange={(e) => isChecked(true, e)}
              ></input>
            </th>
          );
        else return <th>{value}</th>;
      });
    } else {
      return (
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Không có nhân viên bị xóa
        </h3>
      );
    }
  };

  const restoreStaff = (idStaff, nameStaff) => {
    if (
      window.confirm(
        `Bạn có chắc chắn muốn khôi phục ${nameStaff.toUpperCase()} không?`
      )
    ) {
      Axios.put(`${process.env.REACT_APP_API}/admin/restoreStaff/${idStaff}`)
        .then((res) => {
          setIsRestore(!isRestore);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDestroyStaff = (idStaff, nameStaff) => {
    if (
      window.confirm(
        `Bạn có chắc chắn muốn xóa VĨNH VIỄN ${nameStaff.toUpperCase()} không?`
      )
    ) {
      Axios.delete(`${process.env.REACT_APP_API}/admin/destroyStaff/${idStaff}`)
        .then((res) => {
          setIsDestroy(!isDestroy);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const isChecked = (isAll, e) => {
    const all = document.getElementById("checkbox-all");
    const child = document.querySelectorAll(".checkbox-item");
    const childIsChecked = document.querySelectorAll(
      "input.checkbox-item:checked"
    );
    if (isAll) {
      setisDisplayButton(all.checked);
      if (all.checked) {
        child.forEach((item) => {
          item.checked = true;
        });
      } else {
        child.forEach((item) => {
          item.checked = false;
        });
      }
    } else {
      setisDisplayButton(childIsChecked.length > 0);
      if (childIsChecked.length == child.length) {
        all.checked = true;
      } else {
        all.checked = false;
      }
    }
  };

  const getStaffValues = () => {
    return listStaff.map((staff, indexStaff) => {
      return (
        <tr>
          <td>
            <input
              className="checkbox-item"
              type="checkbox"
              value={staff._id}
              onChange={(e) => isChecked(false, e)}
            ></input>
          </td>
          <td>{indexStaff + 1}</td>
          <td>{staff.name}</td>
          <td>{staff.email}</td>
          <td>{staff.password || "Tài khoản Google"}</td>
          <td
            id="edit-staff"
            onClick={(e) => restoreStaff(staff._id, staff.name)}
          >
            <i class="fa-solid fa-trash-can-arrow-up"></i>
          </td>
          <td
            id="destroy-staff"
            onClick={(e) => handleDestroyStaff(staff._id, staff.name)}
          >
            <i class="fa-solid fa-trash-can"></i>
          </td>
        </tr>
      );
    });
  };

  const restoreAllStaff = () => {
    const childIsChecked = document.querySelectorAll(
      "input.checkbox-item:checked"
    );
    if (
      window.confirm(
        `Bạn có chắc chắn muốn khôi phục ${childIsChecked.length} nhân viên không?`
      )
    ) {
      childIsChecked.forEach((item) => {
        Axios.put(
          `${process.env.REACT_APP_API}/admin/restoreStaff/${item.value}`
        )
          .then((res) => {
            setIsRestore(!isRestore);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  const handleDestroyAllStaff = () => {
    const childIsChecked = document.querySelectorAll(
      "input.checkbox-item:checked"
    );
    if (
      window.confirm(
        `Bạn có chắc chắn muốn xóa vĩnh viễn ${childIsChecked.length} nhân viên không?`
      )
    ) {
      childIsChecked.forEach((item) => {
        Axios.delete(
          `${process.env.REACT_APP_API}/admin/destroyStaff/${item.value}`
        )
          .then((res) => {
            setIsRestore(!isRestore);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  const BackToAdminHome = () => {
    props.handleSet(RemoveSpecialCharacters("Admin"));
  };

  return (
    <div className="container-staff">
      <div className="btn-add">
        {isDisplayButton && (
          <>
            <Button
              text="Khôi phục tất cả"
              type={0}
              onClick={restoreAllStaff}
            />
            <Button
              text="Xóa tất cả"
              type={0}
              onClick={handleDestroyAllStaff}
            />
          </>
        )}

        <Button text="Trở về trang chủ" type={1} onClick={BackToAdminHome} />
      </div>

      <table className="staff-table">
        <thead>{getStaffKeys()}</thead>
        <tbody>{getStaffValues()}</tbody>
      </table>
    </div>
  );
};

export default DisplayDeletedStaff;
