import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import PromotionSection from "./PromotionSection";

const About = () => {
  return (
    <Box ml={5} mr={5} mb={2} mt={"40px"}>
      <Typography variant="h2" mb={2}>
        About
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Welcome to the AF WHtR Calculator, an open-source project hosted on{" "}
            <Link href="https://github.com/rogerrivl/AF-WHtR" target="_blank">
              GitHub
            </Link>
            . We encourage you to contribute or report any issues you encounter. This site is designed using{" "}
            <Link href="https://mui.com/" target="_blank">
              Material UI
            </Link>{" "}
            for a sleek and responsive user experience.
          </Typography>
          <Typography mt={3} variant="body1">
            If you have any questions or feedback, please reach out to us at{" "}
            <Link href="mailto:roger@forcemobilestudios.com">
              roger@forcemobilestudios.com
            </Link>.
          </Typography>
          <Typography mt={3} variant="body1">
            Thank you for considering supporting the AF WHtR Calculator! If you find this tool helpful and wish to aid in its ongoing development and maintenance, please consider{" "}
            <Link href="https://www.buymeacoffee.com/rogerrivl.dev" target="_blank">
              Buying me a Coffee
            </Link>
            . Your support is greatly appreciated!
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            For official announcements, kindly{" "}
            <Link
              href="https://www.af.mil/News/Article-Display/Article/3262830/department-of-the-air-force-outlines-new-body-composition-program-for-airmen-gu/"
              target="_blank"
            >
              click here
            </Link>
            . You can also find Air Force-specific policies by{" "}
            <Link
              href="https://www.af.mil/Portals/1/documents/2023SAF/Tab_1._Air_Force_Body_Composition_Policy_Memo.pdf"
              target="_blank"
            >
              clicking here
            </Link>
            , or check out U.S. Space Force-specific policies by{" "}
            <Link
              href="https://www.af.mil/Portals/1/documents/2023SAF/USSF_Body_Composition_Program_Memo_JAN2023.pdf"
              target="_blank"
            >
              clicking here
            </Link>
            .
          </Typography>

         
        </Grid>
      </Grid>
      <Divider sx={{ mt: 10 }} />
      <PromotionSection />
    </Box>
  );
};

export default About;
