import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import { StyledBox } from "./Navbar";
import SlideBar from "../components/SlideBar";

const Home = () => {
  return (
    <StyledBox
      sx={{
        height: "100%",
        maxHeight: "100vh",
        zIndex: 1,
      }}
    >
      <Box
        sx={{ zIndex: 12, position: "fixed", bottom: "17px", left: "70%" }}
        display={{ xs: "block", sm: "none", md: "none" }}
      >
        <SlideBar />
      </Box>
      <Grid
        container
        // direction={{ xs: "column", md: "row", sm: "row" }}
        height={"100%"}
        sx={{ zIndex: 1 }}
      >
        <Grid
          item
          display={{ xs: "none", sm: "block", md: "block" }}
          xs={12}
          sm={6}
          md={6}
          sx={{ maxHeight: "100vh" }}
          margin={0}
          padding={"10%"}
        >
          <Box>
            <Navbar />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          margin={0}
          padding={"7%"}
          marginTop={"6%"}
          maxHeight={"90%"}
          sx={{
            overflow: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default Home;
