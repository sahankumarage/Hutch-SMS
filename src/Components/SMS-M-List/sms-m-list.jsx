import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function smsList({ title, text }) {
  return (
    <Grid container mt={0.7} sx={{ display: "flex" }}>
      <Grid
      container
      gap={2}
        mt={2}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid
          p={0}
          lg={1}
          item
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
        <Grid item md={5} sm={4} lg={3.2} xs={10}>
          <Typography sx={{ fontSize: {lg:"18px", md:"18px", sm:"16px"}, fontWeight: "bold" }}>
            {title} &nbsp;
          </Typography>
        </Grid>
        <Grid item md={5} lg={6} sm={5} xs={12}>
          <Typography sx={{ fontSize: {lg:"18px", md:"18px", sm:"16px"} }}>{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default smsList;
