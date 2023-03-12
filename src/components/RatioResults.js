import { Typography, Box, Card, CardContent } from "@mui/material";
import { green, red, blueGrey, purple, amber } from "@mui/material/colors";
function RatioResult({ ratioValue }) {
  const isHighRisk = ratioValue > 0.55;
  const WHTRLeveltextColor = isHighRisk ? red[900] : green[900];
  const RiskLeveltextColor = isHighRisk ? red[600] : green[600];
  const RisktextColor = isHighRisk ? red[500] : green[500];

  return (
    <Box sx={{ mt: 6 }}>
      <Card>
        <CardContent>
          <Box sx={{ mb: 3 }}>
            <Typography
              textAlign={"center"}
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={"bold"}
            >
              Waist to Height Ratio Result:
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              align="center"
              sx={{ color: WHTRLeveltextColor }}
            >
              WHtR Level: {ratioValue}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            fontWeight={"bold"}
            align="center"
            sx={{ color: RiskLeveltextColor }}
          >
            Risk Level: {""}
            {isHighRisk ? "Not Meeting Standard " : "Meeting Standard"}
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            align="center"
            sx={{ color: RisktextColor }}
          >
            {isHighRisk ? "High Risk " : "Low-Moderate Risk"}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              {isHighRisk
                ? " Airmen and Guardians identified as not meeting the BCP standards will be enrolled into an informal, self-directed Body Composition Improvement Program for 12 months and referred to their medical treatment facility for a medical evaluation and assessment for additional risk factors."
                : "There are no mandatory actions for Airmen and Guardians meeting the BCP standards, however, members will have their WHtR reviewed during their annual medical Periodic Health Assessment. They will receive education or a referral based on their risk category and other health concerns if indicated. "}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
export default RatioResult;
