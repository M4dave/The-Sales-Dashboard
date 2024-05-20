import TrafficIcon from "@mui/icons-material/Traffic";
import { Typography } from "@mui/material";

function TrafficReceived() {
  return (
    <div
      style={{
        position: "fixed",
        top: 110,
        left: "17%",
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
      <TrafficIcon />
      <Typography variant="h6" paragraph>
        1,325,134
      </Typography>
      <Typography variant="h6" paragraph>
        Traffic Received +43%
      </Typography>
    </div>
  );
}

export default TrafficReceived;
