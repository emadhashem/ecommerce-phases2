import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
import "./mainPageTable.scss";

const MainPageTable = () => {
  const { darkMode } = useContext(DarkModeContext);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      "&:nth-of-type(even)": {
        backgroundColor: "#0865CF",
      },
      "&:nth-of-type(odd)": {
        backgroundColor: "#2C7BE5",
      },
    },
    // [`&.${tableCellClasses.body}`]: {
    //   fontSize: 14,
    //   //   borderLeft: "1px solid rgba(224, 224, 224, 1)",
    // },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: darkMode ? "#0b1727" : "#E9E9E9",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: darkMode ? "#121e2d" : "#FFFFFF",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
      borderLeft: "1px solid #2C7BE5",
    },
  }));

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen ", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  ];

  return (
    <div className="MainPageTable-wrapper">
      <TableContainer className="table" component={Paper}>
        <Table
          sx={{ width: "100%" }}
          size="small"
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">دولار قامشلي</StyledTableCell>
              <StyledTableCell align="right">دولار دمشق</StyledTableCell>
              <StyledTableCell align="right">دولار حلب</StyledTableCell>
              <StyledTableCell align="right">دولار إدلب</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MainPageTable;
