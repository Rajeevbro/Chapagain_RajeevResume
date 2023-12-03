import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ height: "100%", maxHeight: "100vh", overflow: "hidden" }}>
      <Grid container spacing={0} height={"100%"}>
        <Grid
          item
          xs={6}
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
          xs={6}
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
    </Box>
  );
};

export default Home;
