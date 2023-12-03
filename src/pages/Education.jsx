import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
  let handleClick = () => {
    window.open("https://www.nwmissouri.edu/", "_blank");
  };
  return (
    <Button onClick={handleClick}>
      <Card margin="55%" sx={{ padding: "0 20px" }}>
        <CardContent>
          <img
            src="https://logowik.com/content/uploads/images/northwest-missouri-state-university8644.logowik.com.webp"
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%", // Ensure the image doesn't exceed the height of the box

              margin: "auto", // Center the image horizontally within the box
              backgroundColor: "red",
            }}
          />
        </CardContent>
        <Box>
          <Typography color="black" lineHeight={"40px"} fontSize={"20px"}>
            Bachelors in Computer Science and Information System
            <br />
          </Typography>
        </Box>
      </Card>
    </Button>
  );
};

export default Education;
