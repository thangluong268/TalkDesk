const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KeyWord = new Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("keyword", KeyWord);
