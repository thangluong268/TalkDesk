const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Call = new Schema(
  {
    answeredCalls: { type: Number },
    missedCalls: { type: Number },
    abandonedCalls: { type: Number },
    shortAbandonedCalls: { type: Number },
    voicemail: { type: Number },
    month: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Call", Call);
