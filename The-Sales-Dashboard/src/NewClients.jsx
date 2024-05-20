import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Typography } from "@mui/material";

function NewClients() {
  return (
    <div
      style={{
        position: "fixed",
        top: 110,
        left: "55%",
        width: "15%",
        height: "300px",
        backgroundColor: "white",
        border: "1px solid #f5f5f5",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <PersonAddIcon />
      <Typography variant="h6" paragraph>
        32,441
      </Typography>
      <Typography variant="h6" paragraph>
        New Clients +5%
      </Typography>
    </div>
  );
}

export default NewClients;
