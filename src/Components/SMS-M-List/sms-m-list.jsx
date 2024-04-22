import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function smsList({ title, text }) {
  return (
    <Grid container mt={0.7} sx={{ display: "flex" }}>
      <Grid
        mt={2}
        lg={11}
        md={12}
        sm={12}
        xs={12}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid
          p={2}
          lg={1}
          
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "#FF6E3C",
              width: "15px",
              height: "15px",
            }}
          />
        </Grid>
        <Grid md={5} sm={6} xs={8}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            {title} &nbsp;
          </Typography>
        </Grid>
        <Grid md={8} sm={6} xs={10}>
          <Typography sx={{ fontSize: "18px" }}>{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default smsList;
