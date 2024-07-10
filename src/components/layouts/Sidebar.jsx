import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { navItems } from "../../constants/constants";

const Sidebar = (props) => {
  const { handleDrawerToggle } = props;
  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      width="300px"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Tori App
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={RouterLink}
            to={item.path}
            disablePadding
          >
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
