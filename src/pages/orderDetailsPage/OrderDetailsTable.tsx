import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
import "./orderDetailsTable.scss";
import { getImg } from "../../api";
import { TablePaginationActions } from "../../shared/TablePaginationActions";

const OrderDetailsTable = ({ products = [] }: any) => {
  const { darkMode } = useContext(DarkModeContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  console.log(page);

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
  // const emptyRows =
  //   page > 0
  //     ? Math.max(0, (1 + page) * rowsPerPage - products.length)
  //     : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function productCoinInTable(product: any) {
    let sy = "sy";
    let ret = {
      coin: "سوري",
      price: 0,
    };
    if (product.product_coin === sy) ret.price = product.product_price_sy;
    else {
      ret.coin = "دولار";
      ret.price = product.product_price_dollar;
    }
    return ret;
  }

  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ width: "100%" }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">أسم المنتج</StyledTableCell>
            <StyledTableCell align="right">الصنف</StyledTableCell>
            <StyledTableCell align="right">العدد</StyledTableCell>
            <StyledTableCell align="right">السعر</StyledTableCell>
            <StyledTableCell align="right">العملة</StyledTableCell>
            <StyledTableCell align="right">الصورة</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? products.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : products
          ).map((item: any) => (
            <StyledTableRow key={item.product_id}>
              <StyledTableCell component="th" scope="row">
                {item.product_name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {item.sub_category_name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {item.product_count}
              </StyledTableCell>
              <StyledTableCell align="right">
                {productCoinInTable(item).price}
              </StyledTableCell>
              <StyledTableCell align="right">
                {productCoinInTable(item).coin}
              </StyledTableCell>
              <StyledTableCell align="right">
                <img src={getImg(item.product_photo_url)} alt="" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        {products.length > 5 && (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5]}
                colSpan={3}
                count={products.length}
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

export default OrderDetailsTable;
