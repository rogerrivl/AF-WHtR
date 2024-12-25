import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import CloseIcon from "@mui/icons-material/Close"; // Close icon
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon
import { useNavigate } from "react-router";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBarView = ({ darkMode, onThemeChange }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)"); // Detects mobile screens
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Fitness Tips", path: "/fitness" },
    { label: "About", path: "/about" },
  ];

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }}>
        <IconButton onClick={toggleDrawer} sx={{ float: "right" }}>
          <CloseIcon />
        </IconButton>
        <List>
          {navLinks.map((link) => (
            <ListItem button key={link.label} onClick={() => navigate(link.path)}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Avatar alt="favicon" src="/favicontape.ico" sx={{ width: 32, height: 32, marginRight: 2 }} />
          <Box>
            <Typography variant="caption" fontWeight="bold">
              U.S Air Force
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              WHtR Calculator
            </Typography>
          </Box>
        </Box>
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <Box display="flex" alignItems="center" gap={2}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                onClick={() => navigate(link.path)}
                color="inherit"
                underline="hover"
                style={{ cursor: "pointer" }}
              >
                {link.label}
              </Link>
            ))}
            <IconButton onClick={onThemeChange} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarView;
