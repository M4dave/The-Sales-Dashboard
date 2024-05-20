import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { Typography } from "@mui/material";

function SalesObtained() {
  return (
    <div
      style={{
        position: "fixed",
        top: 110,
        left: "36%",
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
      <PointOfSaleIcon />

      <Typography variant="h6" paragraph>
        431,225
      </Typography>
      <Typography variant="h6" paragraph>
        Sales Obtained +21%
      </Typography>
    </div>
  );
}

export default SalesObtained;
