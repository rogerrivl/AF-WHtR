import React from "react";
import { Box, Grid, Card, CardContent, Typography, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PromotionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box 
      ml={isMobile ? 2 : 5} 
      mr={isMobile ? 2 : 5} 
      mb={2} 
      mt={isMobile ? "20px" : "40px"}
    >
      <Typography 
        variant={isMobile ? "h4" : "h2"} 
        mb={2} 
        textAlign={isMobile ? "center" : "left"}
      >
        Other Projects
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Total Force Hub Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Total Force Hub
              </Typography>
              <Typography variant="body1" paragraph>
                Total Force Hub is dedicated to current Air Force members and veterans, serving as a central repository for Enlisted Performance Briefs (EPBs) and Officer Performance Briefs (OPBs). We also cover topics related to Separation, Finance, Personnel, Education, Fitness, and Travel.
              </Typography>
              <Link href="https://totalforcehub.com" target="_blank" variant="body2">
                Visit Total Force Hub
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Force Mobile Studios Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Force Mobile Studios
              </Typography>
              <Typography variant="body1" paragraph>
                At Force Mobile Studios, we provide web and app development services to small and mid-size businesses, along with consulting in network architecture and server solutions. Our goal is to pioneer user-friendly designs for operational excellence through cutting-edge software solutions.
              </Typography>
              <Link href="https://forcemobilestudios.com" target="_blank" variant="body2">
                Visit Force Mobile Studios
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PromotionSection;
