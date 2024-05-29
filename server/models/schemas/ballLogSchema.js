const mongoose = require("mongoose");

const ballLogSchema = new mongoose.Schema({
  bowler_id: {
    type: mongoose.Types.ObjectId,
    ref: "players",
  },
  on_strike_batsman_id: {
    type: mongoose.Types.ObjectId,
    ref: "players",
  },
  off_strike_batsman_id: {
    type: mongoose.Types.ObjectId,
    ref: "players",
  },
  runs_scored: { type: Number },
  wicket: {
    is_wicket: { type: Boolean, default: false },
    wicket_number: { type: Number },
    runs_this_ball: { type: Number, default: 0 },
    dismissal_comment: { type: String },
    over: { type: Number },
    ball: { type: Number },
    total_runs: { type: Number },
  },
  extra: {
    is_extra: { type: Boolean, default: false },
    extra_type: { type: String, enum: ["WD", "NB", "B", "LB", "P"] },
    runs_this_ball: { type: Number, default: 0 },
  },
});

module.exports = { ballLogSchema };
