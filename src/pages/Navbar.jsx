import { Box, Stack, Typography, Button, styled } from "@mui/material";
import React from "react";
import { resumeData } from "../ResumeData/resumeData";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import resume from "../assets/RajeevResume.pdf";
import DownloadResume from "../components/DownloadResume";

export const StyledButton = styled(Button)(() => ({
  color: "#f4f4f4",
  "&:hover": {
    color: "#078c12",
  },
}));

export const StyledBox = styled(Box)(() => ({
  overflow: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={6}>
      <Box
        displayPrint={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h4">{resumeData.name.toUpperCase()}</Typography>
        <Typography variant="h5" marginTop={"15%"}>
          {resumeData.title}
        </Typography>
        <Box sx={{ marginTop: "2%", fontSize: "20px", marginTop: "7%" }}>
          <p>{resumeData.description}</p>
        </Box>
      </Box>
      <Box>
        <Typography>
          <StyledButton
            sx={{ color: "#f4f4f4" }}
            onClick={() => navigate("projects")}
          >
            {" "}
            Projects
          </StyledButton>
        </Typography>
        <Typography>
          <StyledButton onClick={() => navigate("skills")}>
            {" "}
            Skills
          </StyledButton>
        </Typography>
        <Typography>
          <StyledButton onClick={() => navigate("education")}>
            {" "}
            Education
          </StyledButton>
        </Typography>

        <Typography>
          <StyledButton
            sx={{ color: "#f4f4f4" }}
            onClick={() => navigate("about")}
          >
            {" "}
            About
          </StyledButton>
        </Typography>
      </Box>
      <Box padding={"20px"} alignContent={"center"}>
        <Stack direction="row" spacing={4}>
          <a
            href="https://www.linkedin.com/in/chapagainrajeev/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Rajeevbro?tab=repositories"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </Stack>
      </Box>
      <DownloadResume />
    </Stack>
  );
};

export default Navbar;
