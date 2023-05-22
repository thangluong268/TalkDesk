const StaffModel = require("../models/Staff");
const nodemailer = require("nodemailer");
class Staff {
  sendOtp(req, res, next) {
    StaffModel.findOne({
      email: req.body.email,
      state: true,
    })
      .then((result) => {
        if (req.body.state) {
          if (result) {
            if (!result.password) {
              res
                .status(404)
                .send(
                  "Tài khoản này đăng nhập bằng Google, bạn hãy đăng nhập bằng Google với email đã nhập nhé !!!"
                );
            }
          }
          result = !result;
        }

        if (result && req.body.state) {
          res.status(404).send("Email không có trong hệ thống!");
        }
        else if (result && req.body.state != "forgot") {
          res.status(404).send("Email đã tồn tại");
        }
        else {
          const options = {
            from: `TALKDESK <${process.env.USER}>`,
            to: req.body.email,
            subject: "Code Verify",
            html: `
                      <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
                      <div style="max-width: 700px; background-color: white; margin: 0 auto">
                          <div style="width: 100%; background-color: #00efbc; padding: 20px 0; text-align: center;">
                              <h3 style="font-size: 1.5rem">TALKDESK</h3>
                          </div>
                          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                        
                              <div style="font-size: 1.2rem; margin: 0 30px; text-align: center;">
                                  <p>Mã OTP của bạn là: <span style="font-weight: 700;">${req.body.otp}</span></p>
                              </div>
                          </div>
                      </div>
                          `,
          };
          let transpoter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.USER, // email
              pass: process.env.PASSWORD, //password
            },
          });
          transpoter.sendMail(options).then((result) => res.json(result));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  login(req, res, next) {
    if (req.body.email == "admin@admin") {
      StaffModel.findOne({ email: req.body.email, password: req.body.password })
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      StaffModel.findOne({
        email: req.body.email,
        password: req.body.password,
        state: true,
      })
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.json(err);
        });
    }
  }

  signup(req, res, next) {
    StaffModel.findOne({ email: req.body.email })
      .then((staff) => {
        if (staff) res.status(404).send("Email đã tồn tại");
        else {
          const staff = req.body;
          const newStaff = new StaffModel(staff);
          newStaff.save();
          res.json(staff);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
  logInOrSingInWithGoogle(req, res, next) {
    StaffModel.findOne({
      email: req.body.email,
      state: true,
    })
      .then((result) => {
        if (result) {
          res.json(result);
        } else {
          const staff = req.body;
          const newStaff = new StaffModel(staff);
          newStaff.save();
          res.json(staff);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }

  resetPassword(req, res, next) {
    StaffModel.findOne({ email: req.body.email, state: true })
      .then((result) => {
        if (result) {
          const options = {
            from: `TALKDESK <${process.env.USER}>`,
            to: req.body.email,
            subject: "Code Verify",
            html: `
                <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
                <div style="max-width: 700px; background-color: white; margin: 0 auto">
                    <div style="width: 100%; background-color: #00efbc; padding: 20px 0; text-align: center;">
                        <h3 style="font-size: 1.5rem">TALKDESK</h3>
                    </div>
                    <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                        <div style="font-size: 1.2rem; margin: 0 30px; text-align: center;">
                        ${result.password
                ? `<p>Mật khẩu của bạn là: <span style="font-weight: 700;">${result.password}</span></p>`
                : `<p>Chúng tôi không tìm thấy mật khẩu của bạn</p>`
              }
                            
                        </div>
                    </div>
                </div>
                    `,
          };
          let transpoter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.USER, // email
              pass: process.env.PASSWORD, //password
            },
          });
          transpoter.sendMail(options).then((result) => res.json(result));
        } else {
          res.status(404).send("Email không tồn tại trong hệ thống");
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Staff();
