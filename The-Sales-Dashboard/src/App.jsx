import { useState } from "react";
import MiniDrawer from "./MiniDrawer";
import RecentOrder from "./RecentOrder";
import Charts from "./Charts";
import NewClients from "./NewClients";
import SalesObtained from "./SalesObtained";
import TrafficReceived from "./TrafficReceived";

import { CssBaseline } from "@mui/material";

function App() {
  // Function to display the App component
  const [open, setOpen] = useState(false); // State variable to store the open state of the drawer

  return (
    <div>
      {/* MiniDrawer component with open and setOpen props */}
      <CssBaseline />
      <MiniDrawer open={open} setOpen={setOpen} />
      <RecentOrder />
      <Charts />
      <NewClients />
      <SalesObtained />
      <TrafficReceived />
    </div>
  );
}

export default App;
