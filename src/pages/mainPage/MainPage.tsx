import React, { useContext, useEffect, useState } from "react";
import MainNavBar from "./MainNavBar";
import MainSwiper from "../../features/swipers/mainSwiper/MainSwiper";
import Search from "../../features/search/Search";
import CategorySwiper from "../../features/swipers/categorySwiper/CategorySwiper";
import MostSaledSwiper from "../../features/swipers/mostSaledSwiper/MostSaledSwiper";
import ProductList from "../../features/products/productList/ProductList";
import "./mainPage.scss";
import { CategoryContext } from "../../contexts/category/category.context";
import { getPorductsBySubCategory } from "../../api/subcategoies/sub_categories";

function MainPage() {
  const [products, setproducts] = useState<any>([]);
  const { id: idOfSubCategory } = useContext(CategoryContext);
  useEffect(() => {
    async function fetchProductsBySubcategory() {
      const data = await getPorductsBySubCategory(idOfSubCategory);
      setproducts(data.product);
    }
    fetchProductsBySubcategory();
  }, [idOfSubCategory]);
  return (
    <div className="main-page">
      <div>
        <MainSwiper />
        <Search />
        <MostSaledSwiper />
        <div>
          <CategorySwiper />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
