import React from "react";
import { Box, Switch, Typography, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/sidebar.tsx";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebaseconfig.ts";

const auth = getAuth(app);

const Home = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("googleUser");
    signOut(auth).then(() => navigate("/login"));
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "background.default" }}>
      <Sidebar /> {/* Sidebar with improved styling */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Dashboard
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body1" mr={2}>Dark Mode</Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ ml: 2 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>

        {/* Content Section */}
        <Box sx={{ flexGrow: 1, mt: 3 }}>
          <Outlet /> {/* Load nested routes */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
