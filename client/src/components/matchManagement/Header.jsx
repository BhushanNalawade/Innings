/* eslint-disable react/prop-types */

import {
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Typography,
  useTheme,
} from "@mui/joy";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CenteredBox from "../layouts/pages/CenteredBox";
import CustomModal from "../notifications/modals/CustomModal";
import { FiCheckCircle } from "react-icons/fi";
import TeamBadgeHorizontal from "../dataDisplay/TeamBadgeHorizontal";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const Header = ({ isLoading, team1, team2, match_no }) => {
  const matchNumber = match_no;

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { tournamentId } = useParams();

  const handleGoBackRequest = () => {
    navigate(`/tournaments/${tournamentId}/manage`);
  };

  const [openCompleteScoringModal, setOpenCompleteScoringModal] =
    useState(false);

  return (
    <CenteredBox>
      <Card
        variant="soft"
        orientation="horizontal"
        sx={{
          flexDirection: "row",
          gap: 2,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <CardOverflow>
          <Button
            variant="plain"
            color="danger"
            size={isMobile ? "sm" : "lg"}
            sx={{
              borderRadius: 0,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              width: 220,
            }}
            disabled={isLoading}
            onClick={() => handleGoBackRequest()}>
            <Typography
              noWrap
              color="danger"
              startDecorator={<ArrowBackIcon />}>
              Go Back
            </Typography>
          </Button>
        </CardOverflow>
        <CardContent>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: 2,
            }}>
            <Typography
              level={isMobile ? "h4" : "h3"}
              sx={{ opacity: 0.5 }}
              noWrap>
              # {matchNumber}
            </Typography>
            <TeamBadgeHorizontal
              team={team1}
              isSmall={false}
              isLoading={isLoading}
            />
            <Typography level={isMobile ? "title-lg " : "h4"} color="neutral">
              vs
            </Typography>
            <TeamBadgeHorizontal
              team={team2}
              isSmall={false}
              isLoading={isLoading}
            />
          </Box>
        </CardContent>
        <CardOverflow>
          <Button
            variant="solid"
            color="success"
            size={isMobile ? "sm" : "lg"}
            disabled={isLoading}
            onClick={() => setOpenCompleteScoringModal(true)}
            endDecorator={<FiCheckCircle size={isMobile ? 18 : 21} />}>
            <Typography noWrap textColor={"common.white"}>
              Complete Scoring
            </Typography>
          </Button>
        </CardOverflow>
      </Card>
      <CustomModal
        open={openCompleteScoringModal}
        setOpen={setOpenCompleteScoringModal}
        title={"Confirm Completion"}
        content={
          "Are you sure you have input all data and want to complete scoring for this match?"
        }
        useCase={"completeScoring"}
      />
    </CenteredBox>
  );
};

export default Header;
