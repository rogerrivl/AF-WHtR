import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  AppBar,
  Toolbar,
  Container,
  Box,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import RatioResult from "./RatioResults";
function WHTR_Cal() {
  const [waist, setWaist] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [ratio, setRatio] = useState("");
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
  };

  const handleUseFeetChange = (event) => {
    setUseFeet(event.target.checked);
    if (!event.target.checked) {
      setHeightFeet("");
      setHeightInches("");
    } else {
      setHeightInches("");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Typography
              variant="caption"
              fontWeight={"bold"}
              sx={{ flexGrow: 1 }}
            >
              U.S Air Force & U.S Space Force
            </Typography>
            <Typography variant="h5" fontWeight={"bold"} sx={{ flexGrow: 1 }}>
              WHtR Calculator
            </Typography>
          </Box>
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
            <Box sx={{ display: "flex", justifyContent: "center", mb: "5px" }}>
              <Typography
                variant="body1"
                // fontWeight={"bold"}
                align="center"
              >
                The Waist-to-Height Ratio calculator measures excess fat
                distribution in the abdominal region and is calculated by
                dividing waist circumference by height. Excess fat distribution
                in the abdominal region is associated with increased health
                risk.
              </Typography>
            </Box>
            <Divider sx={{ mt: "15px", mb: "15px" }} />
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
              <Button
                variant="contained"
                sx={{ width: "100px", mr: 2 }}
                onClick={calculateRatio}
              >
                Calculate
              </Button>
              <Button
                variant="contained"
                sx={{ width: "100px" }}
                onClick={() => {
                  setWaist("");
                  setHeightFeet("");
                  setHeightInches("");
                  setRatio("");
                }}
              >
                Clear
              </Button>
            </Box>
          </form>
          {ratio && <RatioResult ratioValue={ratio} />}
        </Container>
      </Box>
    </div>
  );
}

export default WHTR_Cal;
