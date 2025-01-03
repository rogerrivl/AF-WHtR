import { Typography, Box, Card, CardContent, Divider } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { Link } from "react-router-dom";
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
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography variant="body2" sx={{ textAlign: "center" }}>
          For those looking to enhance their fitness and meet the required standards, we encourage you to explore valuable resources in the <Link to={"/Fitness"} className="custom-link" >Fitness Tip</Link> page or at <a href="https://totalforcehub.com/category/fitness/"  class='custom-link'>Total Force Hub blog</a>. Get the support you need on your fitness journey!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RatioResult;
