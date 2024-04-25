import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import newsIcon from "../../assets/Icon/newspaper-folded.png";
import BenifitIcon from "../../assets/Icon/price-tag.png";

function benifitCard({ title, text, icon }) {
  return (
    <>
      <Grid
        container
        mb={3}
        lg={4}
        md={6}
        sm={12}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid
          item
          lg={11}
          md={11}
          sm={10}
          xs={11}
          sx={{
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            borderRadius: "20px",
          }}
        >
          
          <Grid p={1} display={"flex"} justifyContent={"center"}>
            <Box
              component={"img"}
              src={icon}
              sx={{ width: "70px", height: "70px", color: "#FF6E3C" }}
            />
          </Grid>
          <Grid p={1} display={"flex"} justifyContent={"center"}>
            <Typography sx={{ fontSize: "18.72px", fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid
            p={2}
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Typography sx={{ fontSize: "16px" }}>{text}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default benifitCard;
