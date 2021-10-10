import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BugReportIcon from "@mui/icons-material/BugReport";

const Header = (props) => {
  const [root, setRoot] = useState(true);
  const { history } = props;

  useEffect(() => {
    if (history.location.pathname.split("/")[1] !== "") {
      setRoot(false);
    } else {
      setRoot(true);
    }
  }, [history.location]);

  const navigateTo = (item) => {
    console.log(item);
    history.push(item);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Add again if you want sidebar */}
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="bugReport"
            sx={{ mr: 2 }}
          >
            <BugReportIcon></BugReportIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tithonus
          </Typography>
          <a className="nav-link" onClick={() => navigateTo("/")}>
            Home
          </a>
          <a className="nav-link" onClick={() => navigateTo("/reports")}>
            Reports
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withRouter(Header);
