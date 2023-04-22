const staff = require("./staff");
const admin = require("./admin");

function route(app) {
  app.use("/staff", staff);
  app.use("/admin", admin);
}
module.exports = route;
