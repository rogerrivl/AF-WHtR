import { Typography, Box, Card, CardContent, Divider } from "@mui/material";
import { green, red } from "@mui/material/colors";

function RatioResult({ ratioValue }) {
  const isHighRisk = ratioValue >= 0.55;
  const WHTRColor = isHighRisk ? red[600] : green[600];
  const riskText = isHighRisk ? "High Risk" : "Low-Moderate Risk";
  const riskLevelText = isHighRisk ? "Not Meeting Standard" : "Meeting Standard";

  return (
    <Box sx={{ mt: 6 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" fontWeight="bold" textAlign="center">
            Waist to Height Ratio Result:
          </Typography>
          <Typography variant="h5" fontWeight="bold" align="center" sx={{ color: WHTRColor }}>
            WHtR Level: {ratioValue}
          </Typography>
          <Typography variant="h6" fontWeight="bold" align="center" sx={{ color: WHTRColor }}>
            Risk Level: {riskLevelText}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" align="center" sx={{ color: WHTRColor }}>
            {riskText}
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {isHighRisk
              ? "Airmen and Guardians identified as not meeting the BCP standards will be enrolled into an informal, self-directed Body Composition Improvement Program for 12 months and referred to their medical treatment facility for a medical evaluation and assessment for additional risk factors."
              : "There are no mandatory actions for Airmen and Guardians meeting the BCP standards, however, members will have their WHtR reviewed during their annual medical Periodic Health Assessment. They will receive education or a referral based on their risk category and other health concerns if indicated."}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RatioResult;
