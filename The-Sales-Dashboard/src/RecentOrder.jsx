//A box with scroll bar displaying recent transactions.
import Link from "@mui/material/Link"; // Importing Link component from MUI library
import Table from "@mui/material/Table"; // Importing Table component from MUI library
import TableBody from "@mui/material/TableBody"; // Importing TableBody component from MUI library
import TableCell from "@mui/material/TableCell"; // Importing TableCell component from MUI library
import TableHead from "@mui/material/TableHead"; // Importing TableHead component from MUI library
import TableRow from "@mui/material/TableRow"; // Importing TableRow component from MUI library
import { mockTransactions } from "./mockData"; // Importing mockTransactions data from external file

export function RecentOrder() {
  // Function to prevent the default behavior of an event
  const preventDefault = (event) => event.preventDefault();
  // Return the RecentOrder component
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "83%",
        height: "300px",
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
        <TableHead>
          {/* Title */}
          <h1
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#1976d2",
            }}
          >
            Recent Orders
          </h1>
          {/* Table Headers */}
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Transaction ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Table Rows */}
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
        <Link href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
      </Table>
    </div>
  );
}

export default RecentOrder;
