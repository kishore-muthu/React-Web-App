import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebaseconfig.ts";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email.trim() && password.trim()) {
      const newUser = { email: email.trim().toLowerCase(), password: password.trim() };
      localStorage.setItem("user", JSON.stringify(newUser)); // ✅ Store properly
      alert("Signup Successful! Please login.");
      navigate("/login");
    } else {
      setError("Please fill in all fields.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("googleUser", JSON.stringify(result.user));
      navigate("/home");
    } catch (error) {
      console.error("Google Signup Error:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Typography variant="h5">Sign Up</Typography>
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
      <Button variant="contained" fullWidth onClick={handleSignup}>
        Sign Up
      </Button>

      <Typography textAlign="center" mt={2}>OR</Typography>
      <Button variant="contained" color="secondary" fullWidth onClick={handleGoogleSignup}>
        Sign Up with Google
      </Button>

      <Typography textAlign="center" mt={2}>
        Already have an account? <Link to="/login" style={{ textDecoration: "none", color: "#1976d2" }}>Login here</Link>
      </Typography>
    </Box>
  );
};

export default Signup;
