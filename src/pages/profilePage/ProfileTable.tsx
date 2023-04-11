import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
import "./profileTable.scss";
import detailsIcon from "../../assets/svgs/detailsIcon.svg";

const ProfileTable = () => {
  const { darkMode } = useContext(DarkModeContext);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    // [`&.${tableCellClasses.head}`]: {
    //   //   backgroundColor: darkMode ? "#0b1727" : "#ffffff",
    //   color: darkMode ? "#2c7be5" : "#d9d9d9",
    //   backgroundColor: `${darkMode ? "#0b1727" : "#ffffff"}`,
    // },
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
      //   borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
  }));

  function createData(
    id: string,
    date: string,
    state: string,
    detailsId: string
  ) {
    return { id, date, state, detailsId };
  }

  const rows = [
    createData("10011 ", "2023/01/01 18:30:05", "قيد التجهيز", "1"),
    createData("10011 ", "2023/01/01 18:30:05", "قيد التجهيز", "2"),
    createData("10011 ", "2023/01/01 18:30:05", "قيد التجهيز", "3"),
    createData("10011 ", "2023/01/01 18:30:05", "قيد التجهيز", "4"),
  ];

  return (
    <TableContainer className="ProfileTable" component={Paper}>
      <Table sx={{ width: "100%" }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">رقم الطلبية</StyledTableCell>
            <StyledTableCell align="right">التاريخ والوقت</StyledTableCell>
            <StyledTableCell align="right">الحالة</StyledTableCell>
            <StyledTableCell align="right">تفاصيل</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="order-state">{row.state}</div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <img
                  className="icon"
                  src={detailsIcon}
                  alt=""
                  id={row.detailsId}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileTable;
