import React, { useContext, useEffect, useState } from "react";
import MainNavBar from "./MainNavBar";
import MainSwiper from "../../features/swipers/mainSwiper/MainSwiper";
import Search from "../../features/search/Search";
import CategorySwiper from "../../features/swipers/categorySwiper/CategorySwiper";
import MostSaledSwiper from "../../features/swipers/mostSaledSwiper/MostSaledSwiper";
import ProductList from "../../features/products/productList/ProductList";
import "./mainPage.scss";
import { UserContext } from "../../contexts/category/user.context";
import { getPorductsBySubCategory } from "../../api/subcategoies/sub_categories";
import MainPageTable from "./MainPageTable";

function MainPage({ coins }: any) {
  const [products, setproducts] = useState<any>([]);
  const { categoryId, userToken } = useContext(UserContext);
  useEffect(() => {
    let cur = true;
    async function fetchProductsBySubcategory() {
      const data = await getPorductsBySubCategory(categoryId, userToken);
      if (cur) {
        setproducts(data.product);
      }
    }
    fetchProductsBySubcategory();
    return () => {
      cur = false;
    };
  }, [categoryId]);
  return (
    <div className="main-page">
      <div>
        <MainSwiper />
        <Search />
        <MainPageTable coins = {coins} />
        <MostSaledSwiper />
        <div>
          <CategorySwiper />
          <ProductList
            products={products.slice(0, 6)}
            showAllProduts={products.length > 6}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
