import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalLayOut from "./layouts/globalLayout/GlobalLayOut";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import CartPage from "./pages/cartPage/CartPage";
import MainPage from "./pages/mainPage/MainPage";
import NotifivationPage from "./pages/notifcationsPage/NotifivationPage";
import SplashPage from "./pages/splashScreen/SplashPage";

function App() {
  if (SplashPage()) {
    return <SplashPage />;
  } else
    return (
      <GlobalLayOut>
        <Routes>
          {/* <Route path="/home" element={<MainPage />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/notifications" element={<NotifivationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </GlobalLayOut>
    );
}

export default App;
