import React from "react";
import { Box, Button, Grid } from "@mui/material";
import icon1 from "../../assets/Icon/secure.png";
import Typography from "@mui/material/Typography";

function uniquenessCard({ icon, title, text }) {
  return (
    <Grid
      container
      mb={3}
      display={"flex"}
      alignItems={"center"}
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        borderRadius: "10px",
        minHeight: "10vh",
      }}
    >
      <Grid item p={2} lg={2} md={2} sm={2} xs={2} display={"flex"} justifyContent={"center"}>
        <Box
          component={"img"}
          src={icon}
          sx={{ width: "40px", height: "40px", color: "#FF6E3C" }}
        />
      </Grid>
      <Grid item p={1} lg={10} md={10} sm={10} xs={10}>
        <Grid item p={0}>
          <Typography sx={{ fontWeight: "bold", fontSize: {lg:"18px", md:"18px", sm:"15px"} }}>
            {title}
          </Typography>
        </Grid>
        <Grid item p={0}>
          <Typography sx={{ fontSize: {lg:"16px", md:"16px", sm:"13px"} }}>{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default uniquenessCard;
