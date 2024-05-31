const Player = require("../models/player");
async function updatePlayerBattingStatistics({ player_id, runs_scored }) {
  await Player.updateOne(
    { _id: player_id },
    {
      $inc: {
        "statistics.total_runs": runs_scored,
        "statistics.balls_faced": 1,
        "statistics.fours": runs_scored === 4 ? 1 : 0,
        "statistics.sixes": runs_scored === 6 ? 1 : 0,
      },
    }
  );
}

async function updatePlayerBowlingStatistics({
  player_id,
  runs_conceded,
  valid_ball,
  is_wicket,
  is_extra,
  extra_type,
}) {
  await Player.updateOne(
    { _id: player_id },
    {
      $inc: {
        "statistics.balls_bowled": valid_ball ? 1 : 0,
        "statistics.runs_conceded": runs_conceded,
        "statistics.wickets_taken": is_wicket ? 1 : 0,
        "statistics.extras.wides": is_extra && extra_type.equals("WD") ? 1 : 0,
        "statistics.extras.no_balls":
          is_extra && extra_type.equals("NB") ? 1 : 0,
        "statistics.extras.byes": is_extra && extra_type.equals("B") ? 1 : 0,
        "statistics.extras.leg_byes":
          is_extra && extra_type.equals("LB") ? 1 : 0,
        "statistics.extras.penalty_runs":
          is_extra && extra_type.equals("P") ? 1 : 0,
      },
    }
  );
}

module.exports = {
  updatePlayerBattingStatistics,
  updatePlayerBowlingStatistics,
};
