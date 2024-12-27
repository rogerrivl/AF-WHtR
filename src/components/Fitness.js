import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

const Fitness = () => {
  const equipment = [
    {
      name: "Yoga Mat",
      description: "Perfect for yoga, stretching, and bodyweight exercises.",
      link: "https://amzn.to/3ZNUu7A",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
    },
    {
      name: "Resistance Bands",
      description: "Great for strength training and mobility exercises.",
      link: "https://amzn.to/3BHUEp7",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dumbbell Set",
      description: "Adjustable dumbbells for versatile strength workouts.",
      link: "https://amzn.to/49TLXEQ",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Foam Roller",
      description: "Ideal for muscle recovery and relieving soreness.",
      link: "https://amzn.to/4gJqnFq",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Kettlebells",
      description: "Excellent for functional strength training and cardio.",
      link: "https://amzn.to/4gQ95q3",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jump Rope",
      description: "An affordable and efficient way to improve cardio fitness.",
      link: "https://amzn.to/3BB8oSF",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Pull-Up Bar",
      description: "Great for upper body strength and core workouts.",
      link: "https://amzn.to/4gOvGTR",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Treadmill",
      description: "Perfect for walking, jogging, or running indoors.",
      link: "https://amzn.to/3Ph7u0J",
      image: "https://via.placeholder.com/150",
    },
    {
        name: "Rowing Machine",
        description: "Works upper and lower body muscles. Low impact alternative to running.",
        link: "https://amzn.to/4fww20d",
        image: "https://via.placeholder.com/150",
      },
  ];

  return (
    <Box ml={5} mr={5} mb={2} mt={"40px"}>
      <Typography variant="h2" mb={3}>
        Fitness Tips
      </Typography>

      <Typography variant="body1" mb={4}>
        Fitness plays a vital role in maintaining a healthy WHtR. Here are some quick tips to get started:
      </Typography>
      <Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">1. Start Small</Typography>
    <Typography>
      Begin with 10-15 minutes of daily activity, such as walking or light stretching.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">2. Focus on Consistency</Typography>
    <Typography>
      It's better to exercise regularly for shorter durations than sporadically for long periods.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">3. Mix It Up</Typography>
    <Typography>
      Combine cardio, strength training, and flexibility exercises for a balanced routine.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">4. Rest and Recover</Typography>
    <Typography>
      Allow your body to recover with adequate rest and hydration to prevent burnout or injuries.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">5. Set Realistic Goals</Typography>
    <Typography>
      Break your fitness journey into achievable milestones to stay motivated and track progress.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">6. Monitor Your Progress</Typography>
    <Typography>
      Keep a fitness journal or use apps to track your workouts and measure improvements over time.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">7. Prioritize Warm-Ups</Typography>
    <Typography>
      Always start with a 5-10 minute warm-up to prepare your body and reduce the risk of injury.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">8. Stay Hydrated</Typography>
    <Typography>
      Drink water before, during, and after exercise to maintain performance and recovery.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">9. Find a Workout Buddy</Typography>
    <Typography>
      Exercising with a friend can keep you accountable and make workouts more enjoyable.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h6">10. Listen to Your Body</Typography>
    <Typography>
      Pay attention to signs of fatigue or pain and adjust your routine accordingly to avoid overtraining.
    </Typography>
  </Grid>
  <Typography variant="body2" mt={4} color="textSecondary">
    Disclaimer: I am not a medical professional. The fitness exercises and recommendations shared are for informational purposes only and should not be considered medical advice. Always consult with a qualified healthcare provider or medical professional before starting any new fitness program or engaging in intense exercise, especially if you have pre-existing health conditions or concerns.
  </Typography>
</Grid>



      
      <Divider sx={{ my: 4 }} />
      <Typography variant="h2" mb={3}>
        Suggested Fitness Equipment
      </Typography>


      <Typography variant="body1" mb={3}>
        Explore our curated list of equipment to enhance your fitness routine. Click on the links to learn more and purchase.
      </Typography>
      <Grid container spacing={3}>
        {equipment.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" mb={2}>
                  {item.description}
                </Typography>
                <Link href={item.link} target="_blank" rel="noopener" underline="hover" color="primary">
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Amazon Affiliate Disclaimer */}
  <Typography variant="body2" mt={4} color="textSecondary">
    Disclaimer: As an Amazon Associate, I earn from qualifying purchases. This website contains affiliate links, which means I may receive a small commission if you purchase a product or service after clicking on a link. This does not affect the price you pay. I only recommend products and services that I believe will be of value to my readers.
  </Typography>
    </Box>
  );
};

export default Fitness;
