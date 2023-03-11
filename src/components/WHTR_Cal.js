import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

function WHTR_Cal() {
  const [waist, setWaist] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [ratio, setRatio] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [riskLevel, setRiskLevel] = useState("");
  const [useFeet, setUseFeet] = useState(true);

  const calculateRatio = () => {
    if (!waist || (!heightFeet && !heightInches)) {
      alert("Please enter valid values for waist and height.");
      return;
    }
    const height = useFeet
      ? heightFeet * 12 + parseInt(heightInches)
      : heightInches;
    const ratioValue = waist / height;
    setRatio(ratioValue.toFixed(2));
    if (ratioValue > 0.55) {
      setRiskLevel("Not Meeting Standard (High Risk)");
    } else {
      setRiskLevel("Meeting Standard (Low-Moderate Risk)");
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUseFeetChange = (event) => {
    setUseFeet(event.target.checked);
    if (!event.target.checked) {
      setHeightFeet("");
    } else {
      setHeightInches("");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Waist to Height Ratio Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          mt: 5,
        }}
      >
        <Container maxWidth="xs">
          <form>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography>
                WHtR measures excess fat distribution in the abdominal region
                and is calculated by dividing waist circumference by height.
                Excess fat distribution in the abdominal region is associated
                with increased health risk.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={useFeet}
                    onChange={handleUseFeetChange}
                    name="useFeet"
                  />
                }
                label="Feet and Inches"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Waist (inches)"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                type="number"
                required
                // fullWidth
              />
              {useFeet ? (
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    label="Height in Feet"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(e.target.value)}
                    type="number"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Inches"
                    value={heightInches}
                    onChange={(e) => setHeightInches(e.target.value)}
                    type="number"
                    required
                    fullWidth
                  />
                </Box>
              ) : (
                <TextField
                  label="Height (inches)"
                  value={heightInches}
                  onChange={(e) => setHeightInches(e.target.value)}
                  type="number"
                  required
                  //   fullWidth
                />
              )}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button variant="contained" onClick={calculateRatio}>
                Calculate
              </Button>
            </Box>
          </form>
          {ratio && (
            <Box sx={{ mt: 5 }}>
              <Card>
                <CardContent>
                  <Typography
                    textAlign={"center"}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Waist to Height Ratio Result:
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    variant="h5"
                    color={"green"}
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                  >
                    WTHR: {ratio}
                  </Typography>
                  <Typography textAlign={"center"} variant="h6" sx={{ mt: 2 }}>
                    Risk Level: {riskLevel}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
}

export default WHTR_Cal;
