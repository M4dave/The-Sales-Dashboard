import { useState } from "react";
import DrawerLeft from "./Drawer";
import RecentOrder from "./RecentOrder";
// import Grid from "@mui/material/Grid";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <DrawerLeft open={open} setOpen={setOpen} />
      <RecentOrder />
    </>
  );
}

export default App;
