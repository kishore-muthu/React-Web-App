import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Home, Person, Edit, BarChart, ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          bgcolor: "#1e1e2f",
          color: "#fff",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemIcon sx={{ color: "#fff" }}><Home /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/home/form">
          <ListItemIcon sx={{ color: "#fff" }}><Person /></ListItemIcon>
          <ListItemText primary="User Form" />
        </ListItem>
        <ListItem button component={Link} to="/home/editor">
          <ListItemIcon sx={{ color: "#fff" }}><Edit /></ListItemIcon>
          <ListItemText primary="Rich Text Editor" />
        </ListItem>
        <ListItem button component={Link} to="/home/dashboard">
          <ListItemIcon sx={{ color: "#fff" }}><BarChart /></ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemIcon sx={{ color: "#fff" }}><ExitToApp /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
