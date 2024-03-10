import { Box, Typography, useTheme } from "@mui/joy";

import PlayerStatisticsCard from "./cards/PlayerStatisticsCard";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const UserStatistics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { firstName, lastName, profileImageURL } = useSelector(
    (state) => state.user.user
  );

  const userName = `${firstName} ${lastName}`;

  //pName, teamName,  runs, avg, sr, high,  w, econ, imgURL, teamColor, [matches, debut, 50s, 100s, 4s, 6s,]
  const userData = [
    userName,
    "Gujarat Titans",
    "156",
    "59.33",
    "117.80",
    "43*",
    "12",
    "9.56",
    profileImageURL,
    "#77C7F2",
    ["16", "2023", "2", "0", "12", "3"],
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 8,
          alignItems: "end",
          width: "100%",
          justifyContent: "space-between",
          mb: 4,
        }}>
        <Typography level={isMobile ? "h3" : "h2"} sx={{}}>
          My Statistics
        </Typography>
        <Typography
          level={isMobile ? "h3" : "h2"}
          color="neutral"
          sx={{ opacity: 0.5 }}>
          {userName}
        </Typography>
      </Box>
      <PlayerStatisticsCard data={userData} isUser={true} />
    </>
  );
};

export default UserStatistics;
