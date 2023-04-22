import React from "react";
import Axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
function AppLogin() {
  const [hasOTP, setHasOTP] = React.useState(false);
  const [hasOTPForgot, setHasOTPForgot] = React.useState(false);

  const [forgotPass, setForgotPass] = React.useState(false);
  const [OTP, setOTP] = React.useState(Math.floor(Math.random() * 10000000));
  const [signUp, setSignUp] = React.useState(false);
  const [account, setAccount] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  React.useEffect(() => {
    if (signUp) {
      document.getElementsByClassName("form-box")[0].style.height = "550px";
    } else {
      document.getElementsByClassName("form-box")[0].style.height = "450px";
    }
  }, [signUp]);

  const LoginNormal = () => {
    Axios.post(process.env.REACT_APP_API + "/staff/login", {
      email: account.email,
      password: account.password,
    })
      .then(function (response) {
        if (response.data.email == "admin@admin") {
          localStorage.setItem("login", "admin");
          localStorage.setItem("name", response.data.name);
          document.location.href = "/admin";
        } else {
          localStorage.setItem("login", "user");
          localStorage.setItem("name", response.data.name);
          document.location.href = "/real-time-dashboard";
        }
      })
      .catch(function (error) {
        alert("Đăng nhập thất bại...");
      });
  };

  const SignUp = () => {
    alert("Đăng ký thành công");
    Axios.post(process.env.REACT_APP_API + "/staff/sign-up", {
      name: account.name,
      email: account.email,
      password: account.password,
    })
      .then(function (response) {
        setSignUp(false);
        setHasOTP(false);
        setOTP(Math.floor(Math.random() * 10000000));
        localStorage.setItem("login", "user");
        localStorage.setItem("name", response.data.name);
        document.location.href = "/real-time-dashboard";
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };
  const ShowOTP = () => {
    if (account.email == "" || account.password == "" || account.name == "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    } else {
      if (account.email.indexOf("@student.hcmute.edu.vn") == -1) {
        alert("Vui lòng nhập email sinh viên");
        return;
      }
    }

    Axios.post(process.env.REACT_APP_API + "/staff/send-otp", {
      email: account.email,
      otp: OTP,
    })
      .then(function (response) {
        alert(`Mã xác thực đã được gửi qua email: ${account.email}`);
        setHasOTP(true);
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };
  const LoginGoogle = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await Axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        if (res.data.email.indexOf("@student.hcmute.edu.vn") == -1) {
          alert("Vui lòng đăng nhập bằng email sinh viên");
          return;
        }
        Axios.post(
          process.env.REACT_APP_API + "/staff/logInOrSingInWithGoogle",
          {
            email: res.data.email,
            name: res.data.name,
          }
        )
          .then(function (response) {
            localStorage.setItem("login", "user");
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("googleAccount", true);
            document.location.href = "/real-time-dashboard";
          })
          .catch(function (error) {
            alert(error.response.data);
          });
      } catch (err) {
        alert(err.response.data);
      }
    },
  });
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
          <div className="image"></div>
        </div>
        {hasOTP == true || forgotPass == true ? (
          hasOTP == true ? (
            <>
              <h1>Nhập mã OTP</h1>
              <div className="body-form">
                <form style={{ width: "300px" }}>
                  <div
                    className="input-group mb-3"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i class="fa-solid fa-signature"></i>
                      </span>
                    </div>
                    <input
                      onBlur={(e) => {
                        if (e.target.value == OTP) {
                          SignUp();
                        } else {
                          alert("Bạn nhập sai mã OTP");
                        }
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <h1>Quên mật khẩu</h1>
              <div className="body-form">
                <form style={{ width: "300px" }}>
                  <div
                    className="input-group mb-3"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="input-group-prepend">
                      <span className="input-group-text">Nhập email:</span>
                    </div>
                    <input
                      type="email"
                      value={account.email}
                      onChange={(e) => {
                        setAccount({ ...account, email: e.target.value });
                      }}
                      onBlur={(e) => {
                        if (
                          e.target.value.indexOf("@student.hcmute.edu.vn") == -1
                        ) {
                          alert("Vui lòng nhập email sinh viên");
                          return;
                        } else {
                          Axios.post(
                            process.env.REACT_APP_API + "/staff/send-otp",
                            {
                              email: e.target.value,
                              otp: OTP,
                              state: "forgot",
                            }
                          )
                            .then(function (response) {
                              alert(
                                `Mã xác thực đã được gửi qua email: ${e.target.value}`
                              );
                              setHasOTPForgot(true);
                            })
                            .catch(function (error) {
                              alert(error.response.data);
                            });
                        }
                      }}
                      className="form-control"
                    />
                  </div>
                  {hasOTPForgot == true && (
                    <div
                      className="input-group mb-3"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="input-group-prepend">
                        <span className="input-group-text">Nhập mã OTP:</span>
                      </div>
                      <input
                        onBlur={(e) => {
                          if (e.target.value == OTP) {
                            Axios.post(
                              process.env.REACT_APP_API +
                                "/staff/forgot-password",
                              {
                                email: account.email,
                              }
                            )
                              .then(function (response) {
                                alert("Đã gửi mật khẩu mới qua email");
                                setHasOTPForgot(false);
                                setForgotPass(false);
                                setOTP(Math.floor(Math.random() * 1000000 + 1));
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                          } else {
                            alert("Bạn nhập sai mã OTP");
                          }
                        }}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  )}
                </form>
              </div>
            </>
          )
        ) : (
          <>
            <div className="body-form">
              <form style={{ width: "300px" }}>
                {signUp && (
                  <div
                    className="input-group mb-3"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i class="fa-solid fa-signature"></i>
                      </span>
                    </div>
                    <input
                      value={account.name}
                      onChange={(e) => {
                        setAccount({ ...account, name: e.target.value });
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                )}

                <div className="input-group mb-3" style={{ marginTop: "20px" }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    value={account.email}
                    onChange={(e) => {
                      setAccount({ ...account, email: e.target.value });
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group mb-3" style={{ marginTop: "20px" }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    value={account.password}
                    onChange={(e) => {
                      setAccount({ ...account, password: e.target.value });
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-secondary btn-block"
                    onClick={(e) => {
                      if (signUp) {
                        setSignUp(false);
                      } else {
                        LoginNormal();
                      }
                    }}
                  >
                    LOGIN
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-block"
                    onClick={(e) => {
                      if (signUp) {
                        ShowOTP();
                      } else {
                        setSignUp(true);
                      }
                    }}
                  >
                    SIGNUP
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-block"
                    onClick={(e) => LoginGoogle()}
                  >
                    GOOGLE
                  </button>
                </div>
              </form>
            </div>
            <div className="message">
              <div>
                <a
                  href=""
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setForgotPass(true);
                    // alert("Chức năng đang được phát triển");
                  }}
                >
                  Forgot your password
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AppLogin;
