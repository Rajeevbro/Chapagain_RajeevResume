import { Paper, Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      height={"100%"}
      // sx={{
      //   overflow: "scroll",
      //   scrollbarWidth: "none",
      //   "&::-webkit-scrollbar": {
      //     display: "none",
      //   },
      // }}
    >
      <Paper
        sx={{
          backgroundColor: "#051626",
          lineHeight: "2.9rem",
          color: "#fff",
          fontSize: "20px",
        }}
      >
        Hello and welcome! I'm Rajeev Chapagain, a dedicated Full Stack
        Developer fueled by a Bachelor's in Information Technology and Computer
        Science. Proficient in React, Spring Boot, and Node.js, my journey
        involves crafting seamless user experiences, optimizing applications,
        and diving deep into secure RESTful APIs. With a passion for innovation,
        I blend creativity with technology to build robust digital solutions.
        <br />
        Explore my diverse skills and experiences as we navigate the dynamic
        world of web development together. Let's embark on this digital
        adventure, where each line of code tells a unique story of innovation
        and growth!
      </Paper>
    </Box>
  );
};

export default About;
