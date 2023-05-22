import React from "react";
import "./index.css";
import logo from "../../assets/img/talkdesk-icon.png";
const Header = () => {
  return (
    <div className="d_flex_bethween header">
      <div className="header-left">
        <img src={logo} alt="" className="logo" />
        <ul className="navbar">
          <li>Calls</li>
          <li>Contacts</li>
          <div style={{ display: "flex" }}>
            <li>Voicemail</li>
            <i
              class="fa-solid fa-circle"
              style={{
                color: "#f45c25",
                fontSize: "8px",
                margin: "20px 10px 10px -14px",
              }}
            ></i>
          </div>
          <li>Teams</li>
          <li>Reporting</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="contact">
        <div className="contact-item">
          <i class="fa-solid fa-grip" style={{ fontSize: "16px" }}></i>
          <b>My Apps</b>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="contact-item">
          <b>Web Mode</b>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="contact-item">
          <i
            class="fa-solid fa-circle"
            style={{ color: "#32cd32", fontSize: "10px" }}
          ></i>
          <b>Available</b>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="contact-item">
          <i
            class="fa-solid fa-user-astronaut"
            style={{ fontSize: "30px" }}
          ></i>
          <i
            class="fa-solid fa-chevron-down"
            style={{ margin: "0 10px 10px" }}
          ></i>
          <div className="box-info">
            <ul>
              <li>{localStorage.getItem("name") || "Admin"}</li>
              <li
                onClick={(e) => {
                  localStorage.removeItem("login");
                  localStorage.removeItem("name");
                  localStorage.getItem("googleAccount") &&
                    localStorage.removeItem("googleAccount");
                  document.location.href = "/";
                }}
              >
                Đăng xuất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
