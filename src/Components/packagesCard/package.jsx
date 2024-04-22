import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Package({ title, freeNumber, freeSms, validityPeriod }) {
  return (
    <Grid container mb={3} lg={6} md={6} sm={6} display="flex" justifyContent="center">
      <Grid
        item
        lg={11}
        md={11}
        sm={11}
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          borderRadius: "20px",
          background: "linear-gradient(to top, #FF6E3C, #FFC86B)", 
          padding: "20px",
        }}
      >
        <Grid p={1} display={"flex"} justifyContent={"center"}>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            {title}
          </Typography>
        </Grid>

        <Grid
          p={3}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography sx={{ fontSize: "16px" }}>
            FREE Number masking / Sender ID(s)
          </Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            {freeNumber}
          </Typography>
        </Grid>

        <Divider
          sx={{ width: "95%", margin: "auto", borderBottom: "1px solid grey" }}
        />

        <Grid
          p={3}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography sx={{ fontSize: "16px" }}>
            FREE SMS Quota No. of SMS (Any Network)
          </Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            {freeSms}
          </Typography>
        </Grid>

        <Divider
          sx={{ width: "95%", margin: "auto", borderBottom: "1px solid grey" }}
        />

        <Grid
          p={3}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography sx={{ fontSize: "16px" }}>
            Top up pack Validity Period (Days)
          </Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            {validityPeriod}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Package;
