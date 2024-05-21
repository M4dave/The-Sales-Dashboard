import { mockTransactions } from "./mockData"; // Importing mockTransactions data from external file
import Grid from "@mui/material/Grid"; // Importing Grid component from MUI library
import Link from "@mui/material/Link"; // Importing Link component from MUI library
import { Typography } from "@mui/material";

// Function to display the Charts component
export default function Charts() {
  // Exporting the Charts component as default
  const preventDefault = (event) => event.preventDefault(); // Function to prevent the default behavior of an event
  const revenue = mockTransactions.reduce((total, transaction) => { // Calculate the total revenue generated
    return total + parseFloat(transaction.cost); // Add the cost of each transaction to the total revenue
  }, 0); // Initial value of the total revenue

  // Return the Charts component
  return (
    <div // Styling for the Charts component
      style={{
        position: "fixed",
        top: 110,
        left: "73.7%",
        width: "25%",
        height: "300px",
        backgroundColor: "white",
        border: "1px solid #f5f5f5",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      {/* Grid container to display the revenue generated */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            paragraph
            style={{ color: "#1976D2" }}
          >
            Revenue Generated
          </Typography>
        </Grid>
        {/* Display the total revenue generated */}
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom paragraph>
            ${revenue.toFixed(2)}
          </Typography>
        </Grid>
        {/* Link to see more orders */}
        <Link
          href="#"
          onClick={preventDefault}
          sx={{
            textAlign: "center",
            mt: 5,
            color: "#1976D2",
            left: 15,
            position: "relative",
            bottom: -70,
          }}
        >
          <Typography variant="h6" gutterBottom>
            See more orders
          </Typography>
        </Link>
      </Grid>
    </div>
  );
}
