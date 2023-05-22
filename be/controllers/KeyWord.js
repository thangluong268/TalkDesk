const KeyWordModel = require("../models/KeyWord");
const nodemailer = require("nodemailer");
class KeyWord {
  getAll(req, res, next) {
    KeyWordModel.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new KeyWord();
