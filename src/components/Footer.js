import {
  Box,
  Divider,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box ml={2} mr={2} mb={2} mt={"100px"}>
      <Divider />
      <Grid container spacing={2}>
        {isMobile ? (
          <>
            <Grid item xs={12}>
              <Typography variant="body1">
                This is an open source project hosted in{" "}
                <Link
                  href="https://github.com/rogerrivl/AF-WHtR"
                  target="_blank"
                >
                  Github
                </Link>
                , feel welcome to contribute or file an issue. This site uses{" "}
                <Link href="https://mui.com/" target="_blank">
                  MaterialUI
                </Link>{" "}
                for styling.
              </Typography>
              <Typography mt={3} variant="body1">
                Please feel free to reach out for questions or comments:
                <Link href="mailto:roger@forcemobilestudios.com">
                  roger@forcemobilestudios.com
                </Link>
              </Typography>
              <Typography mt={3} variant="body1">
                Thank you for considering supporting AF WHtR Calculator! If you
                find this tool useful and would like to contribute to its
                ongoing development and maintenance, please consider{" "}
                <Link
                  href="https://www.buymeacoffee.com/rogerrivl.dev"
                  target="_blank"
                >
                  Buying me a Coffee
                </Link>
                . Your support is greatly appreciated!
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1">
                For the official announcement, kindly click{" "}
                <Link
                  href="https://www.af.mil/News/Article-Display/Article/3262830/department-of-the-air-force-outlines-new-body-composition-program-for-airmen-gu/"
                  target="_blank"
                >
                  here
                </Link>
                . You can also find Air Force-specific policy by clicking{" "}
                <Link
                  href="https://www.af.mil/Portals/1/documents/2023SAF/Tab_1._Air_Force_Body_Composition_Policy_Memo.pdf"
                  target="_blank"
                >
                  here
                </Link>
                , or check out U.S Space Force-specific policy by clicking{" "}
                <Link
                  href="https://www.af.mil/Portals/1/documents/2023SAF/USSF_Body_Composition_Program_Memo_JAN2023.pdf"
                  target="_blank"
                >
                  here
                </Link>
                .
              </Typography>
              <Typography mt={3} variant="body1">
                Please note that this tool is not affiliated with, endorsed by,
                or sponsored by the U.S. Air Force, U.S. Space Force, or the
                Department of Defense. This tool is provided for informational
                purposes only and should not be relied upon as a substitute for
                professional medical advice, diagnosis, or treatment. You are
                solely responsible for using this tool at your own risk.
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={6}>
              <Typography variant="body1">
                This is an open source project hosted in{" "}
                <Link
                  href="https://github.com/rogerrivl/AF-WHtR"
                  target="_blank"
                >
                  Github
                </Link>
                , feel welcome to contribute or file an issue. This site uses{" "}
                <Link href="https://mui.com/" target="_blank">
                  MaterialUI
                </Link>{" "}
                for styling.
              </Typography>
              <Typography mt={3} variant="body1">
                Please feel free to reach out for questions or comments:
                <Link href="mailto:roger@forcemobilestudios.com">
                  roger@forcemobilestudios.com
                </Link>
              </Typography>
              <Typography mt={3} variant="body1">
                Thank you for considering supporting AF WHtR Calculator! If you
                find this tool useful and would like to contribute to its
                ongoing development and maintenance, please consider{" "}
                <Link
                  href="https://www.buymeacoffee.com/rogerrivl.dev"
                  target="_blank"
                >
                  Buying me a Coffee
                </Link>
                . Your support is greatly appreciated!
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1">
                For the official announcement, kindly click{" "}
                <Link
                  href="https://www.af.mil/News/Article-Display/Article/3262830/department-of-the-air-force-outlines-new-body-composition-program-for-airmen-gu/"
                  target="_blank"
                >
                  here
                </Link>
                . You can also find Air Force-specific policy by clicking{" "}
                <Link
                  href="https://www.af.mil/Portals/1/documents/2023SAF/Tab_1._Air_Force_Body_Composition_Policy_Memo.pdf"
                  target="_blank"
                >
                  here
                </Link>
                , or check out U.S Space Force-specific policy by clicking{" "}
                <Link
                  href="https://www.af.mil/Portals/1/documents/2023SAF/USSF_Body_Composition_Program_Memo_JAN2023.pdf"
                  target="_blank"
                >
                  here
                </Link>
                .
              </Typography>
              <Typography mt={3} variant="body1">
                Please note that this tool is not affiliated with, endorsed by,
                or sponsored by the U.S. Air Force, U.S. Space Force, or the
                Department of Defense. This tool is provided for informational
                purposes only and should not be relied upon as a substitute for
                professional medical advice, diagnosis, or treatment. You are
                solely responsible for using this tool at your own risk.
              </Typography>
            </Grid>
          </>
        )}
      </Grid>

      {/* Made with Love section */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2">
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
