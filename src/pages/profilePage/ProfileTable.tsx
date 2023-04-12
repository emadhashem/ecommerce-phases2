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
import InfoIcon from "@mui/icons-material/Info";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const ProfileTable = ({ previousOrderData = [] }: any) => {
  const { darkMode } = useContext(DarkModeContext);

  const navigate = useNavigate();
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

  function handleNavigateToOrderDetails(id: any) {
    navigate(`/order-details/${id}`);
  }

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
          {previousOrderData.map((item: any) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.order_id}
              </StyledTableCell>
              <StyledTableCell align="right">{`${moment(item.created_at).format(
                'YYYY-MM-DD h:mm:ss'
              )}`}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="order-state">{item.order_state}</div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <InfoIcon
                  onClick={() => handleNavigateToOrderDetails(item.order_id)}
                  className="icon"
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
