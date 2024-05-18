import { useState } from "react";
import DrawerLeft from "./Drawer";
import RecentOrder from "./RecentOrder";
// import Grid from "@mui/material/Grid";


function App() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <DrawerLeft open={open} setOpen={setOpen} />
      {/* // Fix the recenorder to work with drawerleft */}
      <RecentOrder />



    </div>
  );
}

export default App;
