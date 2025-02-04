import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import UserTable from "./usertable.tsx";

const UserForm = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", address: "" });
  const [users, setUsers] = useState<any[]>([]);

  // Load users from localStorage when the component mounts
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleSubmit = () => {
    if (user.name && user.email && user.phone && user.address) {
      const updatedUsers = [...users, user];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers)); // ✅ Store in localStorage
      setUser({ name: "", email: "", phone: "", address: "" }); // Clear form
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <TextField
        label="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <TextField
        label="Phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <TextField
        label="Address"
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <UserTable users={users} />
    </Box>
  );
};

export default UserForm;
