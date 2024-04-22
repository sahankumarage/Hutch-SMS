import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import newsIcon from "../../assets/Icon/newspaper-folded.png";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import check from "../../assets/Icon/check.png";
import sms from "../../assets/Icon/sms.png";
import cancel from "../../assets/Icon/cancel.png";

function RateCard({ title, price, smsCost }) {
  return (
    <>
      <Grid
        container
        mb={3}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid
          item
          lg={11}
          md={11}
          sm={11}
          xs={12}
          sx={{
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            borderRadius: "20px",
          }}
        >
          <Grid item pt={3} display={"flex"} justifyContent={"center"}>
            <Typography sx={{ fontSize: "18.72px", fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            p={2}
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Typography sx={{ fontSize: "16px" }}>
              Rs.{price} <br /> One time set up fee
            </Typography>
          </Grid>
          <Grid
            item
            p={2}
            display="flex"
            textAlign="start"
            justifyContent="center"
          >
            <Grid lg={12} md={12} sm={12} xs={12}>
              <List>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      sm={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={sms}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary={`Each SMS Cost Rs.${smsCost}`} />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={cancel}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" Monthly Rental" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" 125 Promotional SMS" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary="160 Transactional SMS" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" Web Dashboard Access" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" API Service" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" Uni code Support" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" Unlimited Contact Storage" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" Delivery Report" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" Quick SMS Message" />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem disablePadding>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      lg={2}
                      md={2}
                      display={"flex"}
                      justifyContent={"center"}
                      mx={"auto"}
                    >
                      <Box
                        component={"img"}
                        src={check}
                        sx={{ width: "20px", height: "20px", color: "#FF6E3C" }}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <ListItemText primary=" Customized SMS Message" />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default RateCard;
