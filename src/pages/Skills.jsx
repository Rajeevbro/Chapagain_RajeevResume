import React from "react";
import { skillSet } from "../ResumeData/resumeData";
import { Typography, Box, Stack, Card, Paper, Divider } from "@mui/material";
import { StyledBox } from "./Navbar";
import DownloadResume from "../components/DownloadResume";

const Skills = () => {
  return (
    <Box height="100%">
      {skillSet.map(({ id, skillSet }) => {
        return (
          <Box
            padding={"5%"}
            sx={{
              height: "70%",
              width: "80%",
              backgroundColor: "#03192d",
              overflow: "hidden",
            }}
          >
            <Divider />
            <Typography variant="h6">{id.toUpperCase()}</Typography>

            <StyledBox
              maxHeight={"100%"}
              maxWidth={"70%"}
              sx={{
                backgroundColor: "#03192d",
              }}
            >
              {skillSet.map((text) => {
                console.log(text);
                return <Typography>{text}</Typography>;
              })}
            </StyledBox>
          </Box>
        );
      })}
      <Box display={{ xs: "block", sm: "none", md: "none" }}>
        <DownloadResume />
      </Box>
    </Box>
  );
};

export default Skills;
