import React, { useState } from "react";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Reorder } from "@mui/icons-material";
import { navItems } from "../../constants/constants";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpenBar, setIsOpenBar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleDrawerToggle = () => {
    setIsOpenBar((prev) => !prev);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" component="div" fontWeight="600">
            Tori App
          </Typography>
          <Box>
            <List sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <Link
                      href={item.path}
                      underline="none"
                      color="inherit"
                      fontSize="1.3rem"
                      fontWeight={currentPath === item.path && "600"}
                    >
                      {item.name}
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <Reorder />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={isOpenBar} onClose={handleDrawerToggle}>
        <Sidebar handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  );
};

export default Navbar;
