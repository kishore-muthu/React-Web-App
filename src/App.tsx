import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Login from "./Pages/login.tsx";  
import Signup from "./Pages/signup.tsx";  
import Home from "./Pages/home.tsx";  // ✅ Home Page (Now acts as a Layout)
import Counter from "./Components/counter.tsx";
import UserForm from "./Components/userform.tsx";
import RichTextEditor from "./Components/richtexteditor.tsx";
import Auth from "./Components/auth.tsx";
import Dashboard from "./Components/dashboard.tsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark/Light Theme Configuration
  const theme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Home Page as Layout with Nested Routes */}
          <Route path="/home" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}>
            <Route index element={<Counter />} /> {/* Default Component on Home */}
            <Route path="form" element={<UserForm />} />
            <Route path="editor" element={<RichTextEditor />} />
            <Route path="auth" element={<Auth />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
