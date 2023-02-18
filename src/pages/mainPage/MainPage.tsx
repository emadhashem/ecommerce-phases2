import React from "react";
import MainNavBar from "./MainNavBar";
import MainSwiper from "../../features/swipers/mainSwiper/MainSwiper";
import Search from "../../features/search/Search";
import CategorySwiper from "../../features/swipers/categorySwiper/CategorySwiper";
import MostSaledSwiper from "../../features/swipers/mostSaledSwiper/MostSaledSwiper";
import ProductList from "../../features/products/productList/ProductList";
import CategoryContextProvider from "../../contexts/category/category";
import PageContainer from "../PageContainer";
function MainPage() {
  return (
    <div>
      <MainNavBar />
      {/* <PageContainer>
        <MainSwiper />
        <Search />
        <MostSaledSwiper />
        <div>
          <CategoryContextProvider>
            <CategorySwiper />
            <ProductList />
          </CategoryContextProvider>
        </div>
      </PageContainer> */}
      <div>
        <MainSwiper />
        <Search />
        <MostSaledSwiper />
        <div>
          <CategoryContextProvider>
            <CategorySwiper />
            <ProductList />
          </CategoryContextProvider>
        </div>
      </div>
    </div>
  );
}

export default MainPage;