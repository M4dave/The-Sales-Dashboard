import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { mockTransactions } from "./mockData";

//A box with scroll bar displaying recent transactions.

export function RecentOrder() {
  const preventDefault = (event) => event.preventDefault();
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        width: "80%",
        height: "50%",
        overflow: "auto",
      }}
    >
      <Table>
        <TableHead>
          <h1>Recent Orders</h1>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{}}>
          {mockTransactions.map((transaction) => (
            <TableRow key={transaction.txId}>
              <TableCell>{transaction.txId}</TableCell>
              <TableCell>{transaction.user}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Link href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
      </Table>
    </div>
  );
}

export default RecentOrder;
