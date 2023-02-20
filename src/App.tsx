import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalLayOut from "./layouts/globalLayout/GlobalLayOut";
import CartPage from "./pages/cartPage/CartPage";
import MainPage from "./pages/mainPage/MainPage";
import NotifivationPage from "./pages/notifcationsPage/NotifivationPage";

function App() {
  return (
    <GlobalLayOut>
      
      <Routes>
      {/* <Route path="/home" element={<MainPage />} /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/notifications" element={<NotifivationPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </GlobalLayOut>
  );
}

export default App;
