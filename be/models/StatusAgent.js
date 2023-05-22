const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StatusAgent = new Schema(
  {
    name: { type: String },
    value: { type: Number },
    color: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("statusagent", StatusAgent);