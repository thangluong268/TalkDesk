import React from "react";
import "./index.css";
import Button from "../../../component/Button";
import Axios from "axios";
import DisplayDeletedStaff from "../DisplayDeletedStaff";

const DisplayStaff = () => {
  const data = ["No", "name", "email", "password", "", ""];
  const [listStaff, setListStaff] = React.useState([])
  const [isDelete, setIsDelete] = React.useState(false)

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}/admin/getAllStaff`)
      .then((res) => {
        setListStaff(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [isDelete])

  const getStaffKeys = () => {
    if (listStaff.length > 0) {
      return (
        data.map((value) => {
          return <th>{value}</th>
        })
      )
    } else {
      return (
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Dữ liệu nhân viên chưa được khởi tạo!!!
        </h3>
      );
    }
  };

  const editStaff = (staff) => {
    localStorage.setItem("staff", JSON.stringify(staff))
    document.location.href = "/admin/edit-staff";
  }

  const handleDelete = ((idStaff, nameStaff) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa ${nameStaff.toUpperCase()} không?`)) {
      Axios.put(`${process.env.REACT_APP_API}/admin/deleteStaff/${idStaff}`)
        .then((res) => {
          setIsDelete(!isDelete)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  })

  const getStaffValues = () => {
    if (listStaff.length > 0) {
      return listStaff.map((staff, indexStaff) => {
        return (
          <tr>
            <td>{indexStaff + 1}</td>
            <td>{staff.name}</td>
            <td>{staff.email}</td>
            <td>{staff.password || "Tài khoản Google"}</td>
            <td id="edit-staff" onClick={e => editStaff(staff)}>
              <i class="fa-solid fa-pen-to-square"></i>
            </td>
            <td id="delete-staff" onClick={e => handleDelete(staff._id, staff.name)}>
              <i class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        );
      });
    } 
    
  };

  const AddStaff = () => {
    document.location.href = "/admin/add-staff";
  };

  const DisplayDeletedStaff = () => {
    document.location.href = "/admin/display-deleted-staff";
  };

  return (
    <div className="container-staff">
      <div className="btn-navigation">
        <Button text="Danh sách nhân viên bị xóa" type={1} onClick={DisplayDeletedStaff} />
        <Button text="Thêm" type={1} onClick={AddStaff} />
      </div>

      <table className="staff-table">
        <thead>{getStaffKeys()}</thead>
        <tbody>{getStaffValues()}</tbody>
      </table>
    </div>
  );
};

export default DisplayStaff;
