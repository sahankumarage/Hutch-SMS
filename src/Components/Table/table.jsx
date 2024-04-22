import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Grid } from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ff6e3c",
    color: "white",
    borderRight: "1px solid rgba(224, 224, 224, 1)", // Add right border for head cells
    borderBottom: "1px solid rgba(224, 224, 224, 1)", // Add bottom border for head cells
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    borderRight: "1px solid rgba(224, 224, 224, 1)", // Add right border for body cells
    borderBottom: "1px solid rgba(224, 224, 224, 1)", // Add bottom border for body cells
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(type, pack1, pack2, pack3, pack4) {
  return { type, pack1, pack2, pack3, pack4};
}

const rows = [
  createData("Intro", "667 SMS", "1333 SMS", "3000 SMS", "3333 SMS"),
  createData("Starter","1000 SMS", "2000 SMS", "3000 SMS", "5000 SMS"),
  createData("Growth", "1200 SMS", "2500 SMS", "3750 SMS", "6250 SMS"),
  createData("Star", "2000 SMS", "4000 SMS", "6000 SMS", "10000 SMS"),
  
];

export default function SmsTable() {
  return (
    <Grid xs={12}>

<TableContainer
      sx={{ width: "70%", borderTopLeftRadius: "20px" }}
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{ fontSize: "24px", fontWeight: "bold" }}
              align="center"
            >
              Account Type
            </StyledTableCell>
            <StyledTableCell
              sx={{ fontSize: "24px", fontWeight: "bold" }}
              align="center"
            >
              SMS Pack 1 <br /> Rs. 1000/-
            </StyledTableCell>
            <StyledTableCell
              sx={{ fontSize: "24px", fontWeight: "bold" }}
              align="center"
            >
              SMS Pack 2 <br /> Rs. 2000/-
            </StyledTableCell>
            <StyledTableCell
              sx={{ fontSize: "24px", fontWeight: "bold" }}
              align="center"
            >
              SMS Pack 3 <br /> Rs. 3000/-
            </StyledTableCell>
            <StyledTableCell
              sx={{ fontSize: "24px", fontWeight: "bold" }}
              align="center"
            >
              SMS Pack 4 <br /> Rs. 5000/-
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" sx={{fontWeight:"bold"}}>{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.pack1}</StyledTableCell>
              <StyledTableCell align="center">{row.pack2}</StyledTableCell>
              <StyledTableCell align="center">{row.pack3}</StyledTableCell>
              <StyledTableCell align="center">{row.pack4}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Grid>
    
  );
}
