import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchData } from "../../api/search/search";
import { UserContext } from "../../contexts/category/user.context";
import ProductList from "../../features/products/productList/ProductList";
import "./searchPage.scss";
import SearchPageNavBar from "./SearchPageNavBar";

const SearchPage = () => {
  const { text } = useParams();
  const [products, setproducts] = useState<any[]>([]);
  const { userToken } = useContext(UserContext);
  useEffect(() => {
    let cur = true
    async function fetchSearchData() {
      try {
        const data = await getSearchData(text, userToken);
        setproducts(data.product);
      } catch (error: any) {
        alert(error.message);
      }
    }
    if(cur) {
      fetchSearchData();
    }
    return () => {
      cur = false
    }
  }, [userToken, text]);

  return (
    <React.Fragment>
      <SearchPageNavBar result={text} />
      <div className="SearchPage-container">
        <div className="container-title">
          <div className="title">
            <ArrowLeftRoundedIcon className="icon" />
            <h3>
              عدد النتاج هو: <span>{products.length}</span>
            </h3>
          </div>
        </div>
        <div className="all-ProductList">
          <ProductList showAllProduts={false} products={products} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
