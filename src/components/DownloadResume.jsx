import React from "react";
import resume from "../assets/RajeevResume.pdf";
import { StyledButton } from "../pages/Navbar";
import { Box } from "@mui/material";

const DownloadResume = () => {
  return (
    <Box>
      <StyledButton>
        <a href={resume} download={"resume"}>
          <StyledButton>Download Resume</StyledButton>
        </a>
      </StyledButton>
    </Box>
  );
};

export default DownloadResume;
