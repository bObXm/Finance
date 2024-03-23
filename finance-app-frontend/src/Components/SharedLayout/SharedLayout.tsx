import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const SharedLayout:React.FC = ():JSX.Element => {
  return (
    <Container sx={{ padding: 2 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Outlet/>
      </Box>
    </Container>
  );
};

export default SharedLayout;
