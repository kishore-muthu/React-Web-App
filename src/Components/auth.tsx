import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../firebaseconfig.ts"; // Correct import
import { Button } from "@mui/material";

// Initialize Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Auth = () => {
  const [user, setUser] = useState<any>(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);  // Sign in with Google popup
      setUser(result.user);  // Save the user info
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);  // Sign out the user
      setUser(null);  // Clear the user from state
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome, {user.displayName}</h3>
          <img src={user.photoURL} alt="User Avatar" width={50} />
          <Button variant="contained" color="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSignIn}>
          Sign in with Google
        </Button>
      )}
    </div>
  );
};

export default Auth;
