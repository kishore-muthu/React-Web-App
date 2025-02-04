import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebaseconfig.ts";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email && storedUser.password) {
      if (storedUser.email === email.trim().toLowerCase() && storedUser.password === password.trim()) {
        alert("Login Successful!");
        navigate("/home");
      } else {
        setError("Invalid email or password.");
      }
    } else {
      setError("No account found. Please sign up.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("googleUser", JSON.stringify(result.user));
      navigate("/home");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        fullWidth
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>

      <Typography textAlign="center" mt={2}>OR</Typography>
      <Button variant="contained" color="secondary" fullWidth onClick={handleGoogleLogin}>
        Login with Google
      </Button>

      {/* 👇 Signup Navigation Below the Form 👇 */}
      <Typography textAlign="center" mt={2}>
        Don't have an account? <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>Sign up here</Link>
      </Typography>
    </Box>
  );
};

export default Login;
