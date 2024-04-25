import React from "react";
import Button from "@mui/material/Button";

function btn() {
  return (
    <Button
      fullWidth
      variant="contained"
      style={{ backgroundColor: "#FF6E3C", color: "#FFFFFF" }} // Setting background and text color
      sx={{
        fontSize:{lg:"20px", md:"20px", sm:"18px", xs:"16px"},
        fontWeight:"bold",
        padding: "10px",
        "&:hover": {
          backgroundColor: "#FF7043", // Adjust hover background color
        },
      }}
    >
      Get Started Now
    </Button>
  );
}

export default btn;
