import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalLayOut from "./layouts/globalLayout/GlobalLayOut";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import RegisterPage from "./pages/auth/registerPage/RegisterPage";
import CartPage from "./pages/cartPage/CartPage";
import FavoritsPage from "./pages/favorites/FavoritsPage";
import MainPage from "./pages/mainPage/MainPage";
import NotifivationPage from "./pages/notifcationsPage/NotifivationPage";
import SplashPage from "./pages/splashScreen/SplashPage";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import { DarkModeContext } from "./contexts/darkModeContext/darkModeContext";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import UserContextProvider from "./contexts/category/UserContextProvider";
import CartProductsContextProvider from "./contexts/CartProducts/CartProductsContextProvider";
import ShowAllProductsPage from "./pages/showAllProducts/ShowAllProductsPage";
import SearchPage from "./pages/searchPage/SearchPage";
import ProtectedRoutes from "./pages/protectedRoute/ProtectedRoutes";
import ProtectedRoute from "./pages/protectedRoute/ProtectedRoute";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  if (SplashPage()) {
    return <SplashPage />;
  } else
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <UserContextProvider>
          <CartProductsContextProvider>
            <GlobalLayOut>
              <ProtectedRoutes>
                {/* <Route path="/home" element={<MainPage />} /> */}
                <Route path="/" element={<MainPage />} />
                <Route path="/search/:text" element={<SearchPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/allProducts" element={<ShowAllProductsPage />} />
              
                <ProtectedRoute path="/profile" element={<ProfilePage />} />
                <ProtectedRoute path="/profile/settings" element={<SettingsPage />} />
                <ProtectedRoute path="/notifications" element={<NotifivationPage />} />
                <ProtectedRoute path="/cart" element={<CartPage />} />
                <ProtectedRoute path="/favorites" element={<FavoritsPage />} />
                <ProtectedRoute path="*" element={<h1>Not found </h1>} />
              </ProtectedRoutes>
            </GlobalLayOut>
          </CartProductsContextProvider>
        </UserContextProvider>
      </div>
    );
}

export default App;
