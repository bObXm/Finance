import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import TableViewIcon from "@mui/icons-material/TableView";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MenuIcon from "@mui/icons-material/Menu";
import ApartmentIcon from '@mui/icons-material/Apartment';

const Sidebar: React.FC = ():JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        flexShrink: 1,
        "& .MuiDrawer-paper": {
          width: open ? 250 : 57, 
          boxSizing: "border-box",
          marginTop: 8, 
          overflowX: "hidden", 
        },
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          marginLeft: open ? 1 : "auto",
          marginRight: open ? 1 : "auto",
          marginTop: 1,
        }}
      >
        <MenuIcon />
      </IconButton>
      <List>
        {[
          {
            icon: <ApartmentIcon />,
            text: "Company Profile",
            link: "company-profile",
          },
          {
            icon: <TableViewIcon />,
            text: "Income Statement",
            link: "income-statement",
          },
          {
            icon: <AccountBalanceIcon />,
            text: "Balance Sheet",
            link: "balance-sheet",
          },
          {
            icon: <MonetizationOnIcon />,
            text: "Cashflow Statement",
            link: "cashflow-statement",
          },
          {
            icon: <ShowChartIcon />,
            text: "Historical Dividend",
            link: "historical-dividend",
          },
        ].map((item) => (
          <ListItem key={item.text} component={Link} to={item.link} sx={{'&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.04)'}}}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {open && <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 'bold' }}/>}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
