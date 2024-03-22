import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import logo from "./logo.png";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        {/* <img src={logo} alt="Logo" style={{ marginRight: "20px" }} /> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stonks
        </Typography>

        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Button sx={{ color: "#000" }}>Search</Button>

          <Button sx={{ color: "#000" }}>Login</Button>
          <Button color="primary" variant="contained" sx={{ marginLeft: 1 }}>
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
