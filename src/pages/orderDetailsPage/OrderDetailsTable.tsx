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
import "./orderDetailsTable.scss";
import { getImg } from "../../api";

const OrderDetailsTable = ({ products = [] }: any) => {
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
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    img: string
  ) {
    return { name, calories, fat, carbs, protein, img };
  }
  let imgSrc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAABYlBMVEX////6vAXqQjVChvU0qFP///01qFDnOScmpUuYzaf6uQD5///tr6v135WfwO82gflDhfX///r6//v/vQDrQjNChvH//P/oQzY0qFb///fpQTnoRDLtQTb9uQD0uwD35+H66rbvixopp1g8maBznebV8NlTiu3o9ur+8+/44uDuppvjS0XiPyvlTUDhW03mbWfoiIbzzs3ok4jpMB/gaFvqt7PjU0r86d7wNC7thYH53tXeQTX97fHhc23mhnr419n4yMLiX13888751W/3zFD2xzT14If9++DyzVX68L30ykb89NbuwB322of45aX7+unmjH3667vii4fYPB3upqXutJ7rsI7rqXnsoV/vmkjukzb1iRH/4J3f2HrNz2i5xVWetTmRuDCWkGWUZp6hiL+kntCfxfPA2fms2ruAxplZtn4/rW3g9fvS4/el3LZQp6V3v6p7p+1kle6Os+xywIvZ79xtZ+UYAAAMPElEQVR4nO2di1fbOBaHhYniEEFiC8dOiGNoBxIo9AWF7XSmnRYaHi2Fbfe9233vNBCS7hLa/3+v7EB5JI5E7Cgj+PWU6ek5k/rzfehKulIQutWtbnWrW91qQMIYy34EibrZ9DdXmJL5hYWF6fnA/OAF7A9E7kMNTvje4tJS0bn/4OGj8cfTNywE7OWV4tTUlKNplr6y4jxZfjwv+5EGJkIWlizXsixX0zTHceAV6IvfPzbhrbRjQG2t6pZ2UfAC1u79CiLfNGU/XOwav0IPTuA+nfr+GSW27IeLV7gjvWNpzpL+w/KPMAIonfxtoL9i+tMAuL9K1DZ/CL1mTenPpwlROPeF0WtFTZ9aVdv3Q+j9DPDCJuoaP5zeLbruk2mkLn+47V3NstZ+Uhc/lJ6ZX7MWnykb+73oQfr9Z9hU8wX0onc019EXnyla9HLYHob+tWmiJD8Xvfb0VUFJ1+ejd1Y+yH7QWMRJX3w6ThRc++Sjtxz3h2kFR31O27tF/bmCeY+PnpnfHUfK+T43vWMtzis33eWmB99fpqqFPjc9GN95doPpNf0RUmylS4Teur+gWMXHT88qvmXZjxuxROg1fU2xMV+I3tEfy37eaCVEX9QfqTXki9C7jvtg/sbSQ9pfeomo7EeOUEL0lqMvK7XII0QPzv/k5toerF/88cbGPWg4xzx8zaY7YfrxoSx2B0X/YQg9H3eyPU/jkTD9MC1w+dSYEIoRIeCT2CyATBokZpO9knCnEKR39FdDRu/336D99Zl3G6+rux5ot/p6Y3NmfYu9lx4JQdj2i0PUzwdoJiOf2K56aW+krcnJyVJpxNvdfrez33453SRKX3SGhR7QbUQK65vVkXR6pIPgb3c3ZvYxMbu+AFF6Z2mI6M2tiTdeerITeqBSOl3dXCddF+RE6S19eqCM3UXJ283dEjh82vO6wHu+B3gb67SL+YU9fxjoTQRZfv8dgHc3+zdNptMbbyntlP9E63znhyGgR8ime1XA4oH3I8Db3CcdJiji9PLjHtx4/TUvuO/84CTVmcLVTxKmvy+XnuU6Svd2uc1+9gpGNvdN89JmnPB4/0B6pUv2N0a65bkQ+sn0my3cH72jP5RMT+nbN8Lo7RewO3MJX5j+hUx69ujr1c7FTW95pd09dKH2Efb8ezJnuCzfeddkH/HHxwk2TTnjF816+kuJ9DBv2dktXRcejJ8e8SbMc8YXtb22IA3dhwcDime8c7afBHx8thcruq631n3KELdgvFrfvTb66QvwvD1yPc93Nf2FPMfH9v6bkBkN9wvw3p99pCj9qqQtfLaGU9jun51l/jdbtilOb2mWrL41gC+giSjgGf92gWJh+qJrPTel0aOd6491l+jTm6Y4veOC42MpezkAv1+Nhh0CP+2tB5WT4D7evKQjevDPbqa9CHJe+wVs71MW+kK211/IIPfpocab5FvM4IH3SntE1PbWU2nbWBhvR4UeqLplC9Lrz6WdzsM70cJDwc9cX6BP19JfymncYMPd6+tO7LooXd0nQv16+nMqp9TBUOKm+yxxr6g0gYQ8f+mxpAMK2KQbUY31p0qPVAuYk77oaFP6r6VdTVN46/Gv33LSe6X3/LZ3l9ampaU8vBd1zmNT/Y0C97kcSHnyGrQLIuvX/NoifPRTU/oHU16/0luvjwWd7prgtL2rv5ontjTbT0Tu+EzpbR5613UtZ0FWjyaGeVUk8/qr9LsFDnpHd2TVOQH9vvjODR/+ziqP7X+zSpCshhV46++jm9xdUGmCw/ZF/bfEltehiVnYR13p+ZrcCL97QXOnLG3lHgrvfokZHm3E4/gjk69/F3rvBhvol+7hTlvfA6PHhTfpyGb2F5Su/v7qRVMXZC2tIiT3KFZcSQ+q3T9Y4N9dDO+6RX3tJ8ln8CjaiiXombw/Wk4Xegh6S3+xIPuyKYrfxmR60J+0bvSapTvjSNpIdyayHh/9n7WOnu+wKwcfTqPTTlCZ9DuxwXt3pi7Ru74vWNbTtZeX+zwkaSY+299xOtne0h+Mm8Ny0e5MOpYZnk9/Dpldr+k4lqXrr1bnEenY9c6lKN+aaa/D/DYm89+BgS2AZzerTvnXij5ilwv1k+2u/do6fhbdLsVT5wM9Qw4sr+v6ytLai5esIa9bY+vg6W1Mtra9dN8qldjPEb93cfJUf9FP5aw9WV59hlFwpuP6Tx8cmIg0YxbeT0Skjx8/Tmz+9W9//4evf/7r34H+8/PPmcwnUCYa1SrRFQrYpKRv+Z9Evh4c1o/utpVIfGeMGoYxms3CTyMboWYbkeG3Awn3JUQqB1/yKVAyn08kQfDDpx8dZT9yudH2777EPgw+Izs7JJd0YIqhWqdzh4CeuKjUd9nRWJQzjOZwlAvs6E7l4IgZPZEfEP1oLlsbjlIR2D8DeyKfZx5/gT4ZFz1kkdpQ2N6mB/mrVj+1PcR9PPSjw0H/tZ5IJTrTJ5P/NWKBB2WHgt43fDf6VFz0WSMrO+vBP175kkglO3Cfev7/svF4PuT8hkx0xIa5uXoqmewY8W36sVw8xjeMstyj6thPd4kw+ERirBWP5xtGSyY9C7rP4POh7MnU2HFMQ172WCY8/P6c8svZcPpMPLbPZT9JpKc2PkiFO31AX4uLvimRnqCDu10qnIv0jVz0+P6UqSFzuJu724O8TY9a0eMDvTErc7D/ehQa8OfoT6If8NmCQUba3dMw1tV7ZPtv9M1sDK4PYS/t+BLGh6k8BzyjN2k5evocjPbyHH8ukeSlR/gk8hEfTP9J3qXrlaPLazgh9GYDMnS09DDFacg6wIPQWIon6E9tj2aNKOn9VcJZGeRMJvg9J3xAb9aMKH2f0csrdTD+kuKED+gxmY048o0WlZbz5jiD/ozerGWj9X2jJm3Tn34Rpcc00mluzjjucMHHgDTHm/LO6GmhmTOisb7BhrtcE5tyjrAgdMgd9We2N8lJdAWfYZxEuYcrImpXuAr8i/S2ScqQ9yOwfg5MX6bS6NFBnt/xT+kxMpvg+VGs8Bk5fwdLDr0Jji9se8Q2uzKR2N4wjIykKo+pkheA/0aPMIWKr2/bQ4F/jCR+rZLAYH+e3sS4UY7C9mXC7gmQpTER05+zPbyARrnPnY1czig3Za5n0fq16XGhaWRzfdgf3D7XNOXdyQJhL5DwL9NjVOtvY4dZXurW3ZxAqXOJnp3/aeZyWX9FVpTbYEMd1Hhym3oPhJLeRXoQbpazOda/JExvjGbLTXnpLtBhX/TYxo1WdlQ8+NkLm21gW3I7u8D8rqPtESbHWeGBH/6H7DGR7PYgsZR/hZ5lfrMG3i8GD/g1cwi+NlUo53WiR5QUmsdCgQ9ef9yAAk/6lyqQyz1Z4raHXybxze/P+EMyoD+XN2CUb9Xkn19hIkJVfkfbIzblwSRTDmY94fkf2HOjmSFpyoyKni14NE6M0NonGBeNcqYh/eROW5gmxPA70vsnkRj/J7bcZ5zDbf/Jb+Zl9LnZGpE9xn8TxvkI6NuiGNNmppXz17yMtq3Z4g3zdyObNVqZJkV0KCLeF9BH4fmBbBsTyACN2knLCBrYvzWxG62TWgPBjGY4fD4QRiKLej3ocbDmxQqgRrOWOZ5ttcrlcmv2OFNrNmAWD+h0qOgjqHY6CPukfjaA6Ss22X96fR2HHPVX53cWPv36jfYiUHDFnqyVyzCNxUMf2Lp9xAOdnhMZBJCQ+pzh/sL1VazQV4xeaCdHOXrBCb5q9GKBrxi9fc3dDDVEqFDgK0ZPxUZ8xegx+nqD6WHeVRfYwlaNHkPWv7n0SKh1RTl6NtPpfShDXfpKnrtnTT16gj7fZHqbu0FdQXpToF1TPXp208IXzrSvHj3DAd/n2tFTkJ6VPJy+rya9zQZ9zhNpytFD5sNskaen76tJD+NepR5+/Fppej/z8ZxCVpQeVeqsea/X+Xsl6ZnA+j2cX2F6cP56j8SnMj3g98j8CtMj1soylgjDV5zeRnP5kOBXnJ55f8hJHbXpEct95KCe6uL96tOD91N2tWDnW8YUp2f3bRFUGesY/jeAPlDlcz2ZYu18+Qv0B7KfayAiNiJzY0eJFLtY9Oz+qWR+TvaDDUamzRLA3Of6XXa7aBAGydSh9LbyAasydzD2pX7Erhg9GiPyjxQMVNTnpbQCKmD5RwoGK/v8Celh6ay/1a1udatb3Qj9H6t8r3Mub0BbAAAAAElFTkSuQmCC";

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
          {products.map((item: any) => (
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
      </Table>
    </TableContainer>
  );
};

export default OrderDetailsTable;
