//A box with scroll bar displaying recent transactions.
import Link from "@mui/material/Link"; // Importing Link component from MUI library
import Table from "@mui/material/Table"; // Importing Table component from MUI library
import TableBody from "@mui/material/TableBody"; // Importing TableBody component from MUI library
import TableCell from "@mui/material/TableCell"; // Importing TableCell component from MUI library
import TableHead from "@mui/material/TableHead"; // Importing TableHead component from MUI library
import TableRow from "@mui/material/TableRow"; // Importing TableRow component from MUI library
import { mockTransactions } from "./mockData"; // Importing mockTransactions data from external file
import { Typography } from "@mui/material"; // Importing Typography component from MUI library

export function RecentOrder() {
  // Function to prevent the default behavior of an event
  const preventDefault = (event) => event.preventDefault();
  // Return the RecentOrder component
  return (
    <div // Styling for the RecentOrder component
      style={{
        position: "fixed",
        bottom: 5,
        right: 5,
        width: "83%",
        height: "500px",
        overflow: "auto",
        backgroundColor: "white",
        border: "1px solid #f5f5f5",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Title and Table */}
      <Table>
        {/* TableHead component to display the headers of the table */}
        <TableHead>
          <Typography // Typography component to display the title of the RecentOrder component
            variant="h6"
            gutterBottom
            sx={{
              color: "#1976D2",
            }}
          >
            Recent Transactions
          </Typography>

          {/* Table Headers */}
          <TableRow key={mockTransactions.txId}>
            <TableCell sx={{ fontWeight: "bold" }}>Transaction ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Table Rows Mapping through the mockTransactions data and displaying the transaction details */}
          {mockTransactions.map((transaction) => (
            <TableRow key={transaction.txId}>
              <TableCell>{transaction.txId}</TableCell>
              <TableCell>{transaction.user}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Link to see more orders */}
        <Link
          href="#"
          onClick={preventDefault}
          sx={{ mt: 3, color: "#1976D2" }}
        >
          <Typography variant="h6" gutterBottom>See more orders</Typography>
        </Link>
      </Table>
    </div>
  );
}

export default RecentOrder;
