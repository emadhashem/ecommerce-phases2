import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../contexts/category/user.context";
import LoginPage from "../auth/loginPage/LoginPage";
import RegisterPage from "../auth/registerPage/RegisterPage";
import DetailsPage from "../detailsPage/DetailsPage";
import MainPage from "../mainPage/MainPage";
import SearchPage from "../searchPage/SearchPage";
import ShowAllProductsPage from "../showAllProducts/ShowAllProductsPage";

export default function ProtectedRoutes(props: { children: React.ReactNode }) {
  const { children } = props;
  const { userToken } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search/:text" element={<SearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/allProducts" element={<ShowAllProductsPage />} />

      {userToken ? (
        children
      ) : (
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
}
