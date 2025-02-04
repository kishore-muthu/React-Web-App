import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import React from 'react'
const Counter = () => {
  const [count, setCount] = useState(0);

  const bgAnimation = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${Math.min(count / 100, 1)})`, // Adjusting background dynamically
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={{ ...bgAnimation, padding: "20px", borderRadius: "10px" }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={2} mt={2}>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button variant="outlined" color="error" onClick={() => setCount(0)}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
