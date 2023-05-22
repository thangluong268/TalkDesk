const CallModel = require("../models/Call");

class Call {
  // add call [POST] /call/addCall
  addCall(req, res, next) {
    const call = req.body;
    const newCall = new CallModel(call);
    newCall.save();
    res.json(call);
  }

  // get all call [GET] /call/getAllCall
  getAllCall(req, res, next) {
    CallModel.find({}, {phone: 0, name: 0, _id: 0, __v: 0, createdAt: 0, updatedAt: 0})
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

}

module.exports = new Call();
