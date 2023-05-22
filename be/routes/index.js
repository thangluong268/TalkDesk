const staff = require("./staff");
const admin = require("./admin");
const agent = require("./agent");
const call = require("./call");
const keyword = require("./keyword");

const statusagent = require("./statusagent");

function route(app) {
  app.use("/statusagent", statusagent);
  app.use("/staff", staff);
  app.use("/admin", admin);
  app.use("/agent", agent);
  app.use("/call", call);
  app.use("/keyword", keyword);
}
module.exports = route;
