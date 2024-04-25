import React from 'react'
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function smsList({text}) {
  return (
    <Grid container mt={2} sx={{ display: "flex" }}>
      <Grid
        mt={{lg:0, md:1,}}
        lg={11}
        md={11}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid
          p={1}
          lg={2}
          md={1}
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
        
        <Grid lg={12} md={12}>
          <Typography sx={{ fontSize:{lg:"16px" , md:"16px", sm:"16px", xs:"14px"} }}>{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default smsList