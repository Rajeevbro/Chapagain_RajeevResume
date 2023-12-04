import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Outlet, useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DownloadIcon from "@mui/icons-material/Download";
import DownloadResume from "./DownloadResume";

const actions = [
  { icon: <LibraryBooksIcon />, name: "Projects", path: "projects" },
  { icon: <PermDataSettingIcon />, name: "Skills", path: "skills" },
  { icon: <SchoolIcon />, name: "Education", path: "education" },
  { icon: <InfoIcon />, name: "About", path: "about" },
  { icon: <DownloadIcon />, name: "Download Resume", path: "download" },
];

const SlideBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

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
              action.path == "download" ? (
                <DownloadResume />
              ) : (
                navigate(action.path)
              );
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SlideBar;
