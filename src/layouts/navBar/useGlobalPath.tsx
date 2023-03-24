import React from "react";
import CartNavBar from "../../pages/cartPage/CartNavBar";
import FavoriteNavBar from "../../pages/favorites/FavoriteNavBar";
import MainNavBar from "../../pages/mainPage/MainNavBar";
import NotificationNavBar from "../../pages/notifcationsPage/NotificationNavBar";
import DetailsNavBar from "../../pages/detailsPage/DetailsNavBar";
import ShowAllProductsNavBar from "../../pages/showAllProducts/ShowAllProductsNavBar";

const navbars = new Map<string, React.ReactNode>();
navbars.set("/", <MainNavBar />);
navbars.set("/notifications", <NotificationNavBar />);
navbars.set("/cart", <CartNavBar />);
navbars.set("/favorites", <FavoriteNavBar />);
navbars.set("/details", <DetailsNavBar />);
navbars.set("/allProducts", <ShowAllProductsNavBar />);

function useGlobalPath(curPath: string) {
  return navbars.get(curPath);
}

export default useGlobalPath;
