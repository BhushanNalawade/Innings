const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      auto: true,
    },
    match_no: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "ongoing", "completed"],
      default: "pending",
    },
    team1_id: {
      type: mongoose.Types.ObjectId,
      ref: "teams",
      required: [true, "team1 id is required"],
    },
    team2_id: {
      type: mongoose.Types.ObjectId,
      ref: "teams",
      required: [true, "team2 id is required"],
    },
    overs: { type: Number, required: [true, "overs is required"] },
    toss: {
      decision: {
        type: String,
        enum: ["bat", "field"],
      },
      winner: {
        type: String,
      },
      loser: {
        type: String,
      },
      winnerId: {
        type: mongoose.Types.ObjectId,
        ref: "teams",
      },
    },
    winner: { type: String },
    team1_runs: { type: Number, default: 0 },
    team2_runs: { type: Number, default: 0 },
    team1_sixes: { type: Number, default: 0 },
    team2_sixes: { type: Number, default: 0 },
    team1_fours: { type: Number, default: 0 },
    team2_fours: { type: Number, default: 0 },
    innings: { type: Number },
    team1_run_log: [
      {
        run_scorer: {
          type: mongoose.Types.ObjectId,
          ref: "players",
        },
        score: { type: Number },
      },
    ],
    team2_run_log: [
      {
        run_scorer: {
          type: mongoose.Types.ObjectId,
          ref: "players",
        },
        score: { type: Number },
      },
    ],
    team1_extras: {
      wides: { type: Number, default: 0 },
      byes: { type: Number, default: 0 },
      leg_byes: { type: Number, default: 0 },
      no_balls: { type: Number, default: 0 },
    },
    team2_extras: {
      wides: { type: Number, default: 0 },
      byes: { type: Number, default: 0 },
      leg_byes: { type: Number, default: 0 },
      no_balls: { type: Number, default: 0 },
    },
    team1_ball_log: [
      {
        bowler: {
          type: mongoose.Types.ObjectId,
          ref: "players",
        },
        runs_conceded: { type: Number },
        wicket: {
          isWicket: { type: Boolean },
          wicket_number: { type: Number },
        },
        extra: {
          isExtra: { type: Boolean },
          extra_type: { type: String, enum: ["WD", "NB", "B", "LB"] },
        },
      },
    ],
    team2_ball_log: [
      {
        bowler: {
          type: mongoose.Types.ObjectId,
          ref: "players",
        },
        runs_conceded: { type: Number },
        wicket: {
          isWicket: { type: Boolean },
          wicket_number: { type: Number },
        },
      },
    ],
    team1_wicket_log: [
      {
        wicket_taker: { type: String },
        how_out: { type: String },
        fall_of_wicket_stamp: { type: String },
      },
    ],
    team2_wicket_log: [
      {
        wicket_taker: { type: String },
        how_out: { type: String },
        fall_of_wicket_stamp: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);
