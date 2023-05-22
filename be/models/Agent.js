const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Agent = new Schema(
  {
    // name, ringGroup, status, statusTime, waitTime, phone, month
    name: { type: String },
    ringGroup: { type: String },
    status: { type: Number },
    statusTime: { type: Number },
    waitTime: { type: Number },
    phone: { type: String },
    month: { type: Number },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Agent", Agent);
