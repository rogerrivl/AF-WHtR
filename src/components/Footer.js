import { Typography } from "@mui/material";

function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="caption"
        textOverflow={true}
        align="center"
        sx={{ py: 1 }}
      >
        This is not an official U.S Air Force website. It is for informational
        purposes only. Please consult a healthcare professional before making
        any health-related decisions.
      </Typography>
    </div>
  );
}

export default Footer;
