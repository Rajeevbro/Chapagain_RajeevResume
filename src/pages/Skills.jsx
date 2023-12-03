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
            sx={{ height: "50%", width: "60%", backgroundColor: "#03192d" }}
          >
            <Typography variant="h6">{id.toUpperCase()}</Typography>
            <Divider />
            <Box maxHeight={"60%"} maxWidth={"70%"} overflow={"scroll"}>
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
