import React from "react";
import { skillSet } from "../ResumeData/resumeData";
import { Typography, Box, Stack, Card, Paper, Divider } from "@mui/material";

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

            <Box
              maxHeight={"100%"}
              maxWidth={"70%"}
              sx={{
                backgroundColor: "#03192d",
                overflow: "scroll",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none", // For WebKit (Chrome, Safari)
                },
              }}
            >
              {skillSet.map((text) => {
                console.log(text);
                return <Typography>{text}</Typography>;
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Skills;
