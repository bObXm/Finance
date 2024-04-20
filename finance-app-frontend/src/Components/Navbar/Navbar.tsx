import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Link to={"/"}>
          <InsightsIcon fontSize="large" sx={{ color: "#4caf50" }} />
        </Link>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, marginLeft: "1rem", fontWeight: "bold" }}
        >
          Stonks
        </Typography>

        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Link to={'/search'}>
          <Button sx={{ fontWeight: "bold" }}>Search</Button>
          </Link>
          <Button sx={{ fontWeight: "bold" }}>Login</Button>
          <Button
            variant="contained"
            sx={{
              marginLeft: 1,
              fontWeight: "bold",
              backgroundColor: "#4caf50",
              "&:hover": { backgroundColor: "#388e3c" },
            }}
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;