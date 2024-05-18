import { useState } from "react";
import MiniDrawer from "./MiniDrawer";
import RecentOrder from "./RecentOrder";
// import Grid from "@mui/material/Grid";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <MiniDrawer open={open} setOpen={setOpen} />
      <RecentOrder />
    </>
  );
}

export default App;
