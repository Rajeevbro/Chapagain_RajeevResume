import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "100%", display: "block" }}>
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
          padding={"3%"}
          marginTop={"6%"}
          overflow={"scroll"}
          maxHeight={"90%"}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
