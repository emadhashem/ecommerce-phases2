import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
import "./profileTable.scss";
import detailsIcon from "../../assets/svgs/detailsIcon.svg";
import InfoIcon from "@mui/icons-material/Info";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { TablePaginationActions } from "../../shared/TablePaginationActions";
import { orderState } from "../../shared/orderState";

const ProfileTable = ({ previousOrderData = [] }: any) => {
  const { darkMode } = useContext(DarkModeContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
      // border: 0,
      //   borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
  }));

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - previousOrderData.length)
      : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

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
          {(rowsPerPage > 0
            ? previousOrderData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : previousOrderData
          ).map((item: any) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.order_id}
              </StyledTableCell>
              <StyledTableCell align="right">{`${moment(item.created_at).format(
                "YYYY-MM-DD h:mm:ss"
              )}`}</StyledTableCell>
              <StyledTableCell align="right">
                {orderState(item.order_state)}
              </StyledTableCell>
              <StyledTableCell align="right">
                <InfoIcon
                  onClick={() => handleNavigateToOrderDetails(item.order_id)}
                  className="icon"
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        {previousOrderData.length > 5 && (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5]}
                colSpan={3}
                count={previousOrderData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  );
};

export default ProfileTable;
