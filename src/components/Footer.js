import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import { Divider, Box } from "@mui/material";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function VerticalDividerText() {
  const contentLeft = (
    <div>
      {`Thank you for using the Air & Space Force WHtR Calculator\n`}
      {/* <a href="https://www.buymeacoffee.com/rogerrivl.dev">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=rogerrivl.dev&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
      </a> */}
    </div>
  );
  const contentRight = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <Box
      sx={{
        position: "absolute", //Here is the trick
        bottom: 0, //Here is the trick
      }}
    >
      <Divider sx={{ mt: "15px", mb: "15px", mr: "10px", ml: "10px" }} />
      <Grid container>
        <Grid item xs>
          {contentLeft}
        </Grid>
        <Divider orientation="vertical" flexItem>
          Aim High Airman
        </Divider>
        <Grid item xs>
          {contentRight}
        </Grid>
      </Grid>
    </Box>
  );
}
