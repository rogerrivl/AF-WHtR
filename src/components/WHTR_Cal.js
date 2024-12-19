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
import RatioResult from "./RatioResults";

function HeightInput({ useFeet, heightFeet, heightInches, onHeightChange }) {
  return useFeet ? (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField
        label="Height in Feet"
        value={heightFeet}
        onChange={(e) => onHeightChange('heightFeet', e.target.value)}
        type="number"
        required
        fullWidth
      />
      <TextField
        label="Inches"
        value={heightInches}
        onChange={(e) => onHeightChange('heightInches', e.target.value)}
        type="number"
        required
        fullWidth
      />
    </Box>
  ) : (
    <TextField
      label="Height (inches)"
      value={heightInches}
      onChange={(e) => onHeightChange('heightInches', e.target.value)}
      type="number"
      required
    />
  );
}

function WHTR_Cal() {
  const [inputs, setInputs] = useState({
    waist: "",
    heightFeet: "",
    heightInches: "",
    ratio: "",
    useFeet: true,
  });
  const [error, setError] = useState("");

  const calculateRatio = () => {
    const { waist, heightFeet, heightInches, useFeet } = inputs;

    if (!waist || (!heightFeet && !heightInches)) {
      setError("Please enter valid values for waist and height.");
      return;
    }

    const height = useFeet
      ? heightFeet * 12 + parseInt(heightInches || 0, 10)
      : heightInches;

    const ratioValue = waist / height;
    setInputs((prev) => ({ ...prev, ratio: ratioValue.toFixed(2) }));
    setError(""); // Clear any previous errors
  };

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleUseFeetChange = (event) => {
    const useFeet = event.target.checked;
    setInputs((prev) => ({
      ...prev,
      useFeet,
      heightFeet: useFeet ? prev.heightFeet : "",
      heightInches: useFeet ? "" : prev.heightInches,
    }));
  };

  const clearInputs = () => {
    setInputs({
      waist: "",
      heightFeet: "",
      heightInches: "",
      ratio: "",
      useFeet: true,
    });
    setError(""); // Clear any previous errors
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Typography variant="caption" fontWeight="bold" sx={{ flexGrow: 1 }}>
              U.S Air Force & U.S Space Force
            </Typography>
            <Typography variant="h5" fontWeight="bold" sx={{ flexGrow: 1 }}>
              WHtR Calculator
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Container maxWidth="xs">
          <form>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Typography variant="body1" align="center">
                The Waist-to-Height Ratio calculator measures excess fat
                distribution in the abdominal region and is calculated by
                dividing waist circumference by height. Excess fat distribution
                in the abdominal region is associated with increased health
                risk.
              </Typography>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={inputs.useFeet}
                    onChange={handleUseFeetChange}
                    name="useFeet"
                  />
                }
                label="Feet and Inches"
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
              <TextField
                label="Waist (inches)"
                value={inputs.waist}
                onChange={(e) => handleInputChange('waist', e.target.value)}
                type="number"
                required
              />
              <HeightInput
                useFeet={inputs.useFeet}
                heightFeet={inputs.heightFeet}
                heightInches={inputs.heightInches}
                onHeightChange={handleInputChange}
              />
            </Box>

            {error && (
              <Box sx={{ color: 'red', textAlign: 'center', mb: 1 }}>
                {error}
              </Box>
            )}
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
                onClick={clearInputs}
              >
                Clear
              </Button>
            </Box>
          </form>
          {inputs.ratio && <RatioResult ratioValue={inputs.ratio} />}
        </Container>
      </Box>
    </div>
  );
}

export default WHTR_Cal;
