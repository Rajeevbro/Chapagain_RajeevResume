import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DownloadIcon from "@mui/icons-material/Download";

import resume from "../assets/RajeevResume.pdf";

const actions = [
  { icon: <LibraryBooksIcon />, name: "Projects", path: "projects" },
  { icon: <PermDataSettingIcon />, name: "Skills", path: "skills" },
  { icon: <SchoolIcon />, name: "Education", path: "education" },
  { icon: <InfoIcon />, name: "About", path: "about" },
];

const SlideBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const handleDownload = () => {
    console.log("I am clicked");
    <a href={resume} download={"resume"}></a>;
  };

  return (
    <Box
      sx={{
        height: 0,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "fixed", bottom: 20, left: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              setOpen(false);
              navigate(action.path);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SlideBar;
