import React from "react";
import { projectData } from "../ResumeData/resumeData";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Button,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledButton } from "./Navbar";

const Project = () => {
  return (
    <>
      {projectData.map(({ title, summarry, contribution, link }) => {
        return (
          <Card
            sx={{
              backgroundColor: "#001a35",
              minWidth: "25%",
              maxHeight: "250%",
              marginTop: "3.3rem",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                <StyledButton
                  sx={{ fontSize: "90%" }}
                  onClick={() => {
                    window.open(link, "_blank");
                  }}
                >
                  {title}
                </StyledButton>
                <Typography variant="h9" lineHeight={"25px"}>
                  Summarry:
                  <br /> <br /> {summarry}
                </Typography>
                <Accordion marginTop="150px">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={"#211f1f"}>Contribution</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: "10px 10px" }}>
                    {contribution.map((text) => {
                      return (
                        <Typography padding="10px" color={"#201e1e"}>
                          {" "}
                          {text}
                        </Typography>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Project;
