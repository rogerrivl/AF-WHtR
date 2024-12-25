import {
  Box,
  Divider,
  Typography,
  Link,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: "auto", // Pushes the footer to the bottom if content is short
        backgroundColor: "background.default",
        padding: 2,
        borderTop: 1,
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Typography mt={3} variant="body1">
        Please note that this tool is not affiliated with, endorsed by,
        or sponsored by the U.S. Air Force, U.S. Space Force, or the
        Department of Defense. This tool is provided for informational
        purposes only and should not be relied upon as a substitute for
        professional medical advice, diagnosis, or treatment. You are
        solely responsible for using this tool at your own risk.
      </Typography>

      {/* Made with Love section */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <a href="https://www.buymeacoffee.com/rogerrivl.dev">
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=rogerrivl.dev&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
            alt="Buy me a coffee"
          />
        </a>
        <Typography m={2} variant="body2">
          Made with ❤️ by{" "}
          <Link href="https://forcemobilestudios.com" target="_blank">
            Force Mobile Studios
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
