import React from "react";
import Menu from "../Menu/Menu";
import Logo from "../Logo/books.jpg";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Home = () => {
  return (
    <>
      <Menu />
      <Grid item xs={12} m={2}>
        <CardMedia component="img" height="700" image={Logo} alt="Building" />
      </Grid>
      <Grid item xs={12}  m={2} align="center">
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Find Your Favorite Book 
            </Typography>
          </CardContent>
          </Grid>
    </>
  );
};

export default Home;
