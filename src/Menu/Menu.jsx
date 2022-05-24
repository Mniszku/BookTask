import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Grid from "@mui/material/Grid";
import "../Style.scss";

const Menu = () => {
  const buttonStyle = {
    color: "#000000",
  };
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        className="container"
      >
        <Grid item xs={12} align="center">
          <CustomButton
            style={buttonStyle}
            className="button-top"
            path={"/"}
            buttonName={"Home"}
          />
          <CustomButton
            style={buttonStyle}
            className="button-top"
            path={"/Books"}
            buttonName={"Books"}
          />

          <CustomButton
            style={buttonStyle}
            className="button-top"
            path={"/FavoriteBooks"}
            buttonName={"FavoriteBooks"}
          />
          <CustomButton
            style={buttonStyle}
            className="button-top"
            path={"/FindBook"}
            buttonName={"FindBook"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
