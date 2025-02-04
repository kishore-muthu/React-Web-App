import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Typography ,Box} from "@mui/material";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const pieData = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Category Distribution",
        data: [25, 50, 15, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <Box textAlign="center" p={3}>
      <Typography variant="h4" mb={2}>Dashboard</Typography>
      <Pie data={pieData} />
    </Box>
  );
};

export default Dashboard;
