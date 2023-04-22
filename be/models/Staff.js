const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Staff = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    state: {type: Boolean, default: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", Staff);
