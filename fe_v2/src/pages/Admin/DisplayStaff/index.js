import React from "react";
import "./index.css";
import Button from "../../../component/Button";
import Axios from "axios";
import Pagination from "../../../component/Pagination";
import RemoveSpecialCharacters from "../../../utils/RemoveSpecialCharacters";

const DisplayStaff = (props) => {
  const [totalPage, setTotalPage] = React.useState(0);
  const data = ["No", "Name", "Email", "Password", "", ""];
  const [listStaff, setListStaff] = React.useState([]);
  const [isDelete, setIsDelete] = React.useState(false);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_API}/admin/getAllStaff?pageSize=${process.env.REACT_APP_PAGESIZE}&pageIndex=${pageIndex}&search=${search}`
    )
      .then((res) => {
        setListStaff(res.data.staff);
        setTotalPage(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete, pageIndex, search]);
  const setPage = (page) => {
    setPageIndex(page);
  };
  const getStaffKeys = () => {
    if (listStaff.length > 0) {
      return data.map((value) => {
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

  const editStaff = (staff) => {
    localStorage.setItem("staff", JSON.stringify(staff));
    props.handleSet(RemoveSpecialCharacters("AddStaff"));
    localStorage.setItem("Mode", "Edit");
  };

  const handleDelete = (idStaff, nameStaff) => {
    if (
      window.confirm(
        `Bạn có chắc chắn muốn xóa ${nameStaff.toUpperCase()} không?`
      )
    ) {
      Axios.put(`${process.env.REACT_APP_API}/admin/deleteStaff/${idStaff}`)
        .then((res) => {
          setIsDelete(!isDelete);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getStaffValues = () => {
    if (listStaff.length > 0) {
      return listStaff.map((staff, indexStaff) => {
        return (
          <tr>
            <td>{indexStaff + 1}</td>
            <td>{staff.name}</td>
            <td>{staff.email}</td>
            <td>{staff.password || "Tài khoản Google"}</td>
            <td id="edit-staff" onClick={(e) => editStaff(staff)}>
              <i class="fa-solid fa-pen-to-square"></i>
            </td>
            <td
              id="delete-staff"
              onClick={(e) => handleDelete(staff._id, staff.name)}
            >
              <i class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        );
      });
    }
  };

  const AddStaff = () => {
    props.handleSet(RemoveSpecialCharacters("AddStaff"));
    // props.handleSet(RemoveSpecialCharacters("AddAgent"));
    localStorage.setItem("Mode", "Add");  
    localStorage.removeItem("staff");
  };

  const DisplayDeletedStaff = () => {
    props.handleSet(RemoveSpecialCharacters("DisplayDeletedStaff"));
  };

  const Search = () => {
    setSearch(document.getElementById("search-staff").value);
    // console.log(document.getElementById("search-staff").value);
  };

  // const Search = () => {
  //   const input = document.querySelector(".search-staff input");
  //   const filter = input.value.toUpperCase();
  //   const table = document.querySelector(".staff-table");
  //   const tr = table.getElementsByTagName("tr");
  //   for (let i = 0; i < tr.length; i++) {
  //     const td = tr[i].getElementsByTagName("td")[1];
  //     if (td) {
  //       const textValue = td.textContent || td.innerText;
  //       if (textValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // };

  return (
    <div className="container-staff">
      <div className="btn-navigation">
        <div className="search-staff">
          <input
            type="text"
            id="search-staff"
            placeholder="Nhập tên nhân viên cần tìm..."
          />
          <Button text="Tìm" type={1} onClick={Search} />
        </div>
        <Button
          text="Danh sách nhân viên bị xóa"
          type={1}
          onClick={DisplayDeletedStaff}
        />
        <Button text="Thêm" type={1} onClick={AddStaff} />
      </div>

      <table className="staff-table">
        <thead>{getStaffKeys()}</thead>
        <tbody>{getStaffValues()}</tbody>
      </table>

      <Pagination total={totalPage} setPage={setPage} />
    </div>
  );
};

export default DisplayStaff;
