import React from "react";
import CartNavBar from "../../pages/cartPage/CartNavBar";
import MainNavBar from "../../pages/mainPage/MainNavBar";
import NotificationNavBar from "../../pages/notifcationsPage/NotificationNavBar";
const navbars = new Map<string , React.ReactNode>()
navbars.set("/" , <MainNavBar />)
navbars.set("/notifications" , <NotificationNavBar />)
navbars.set("/cart" , <CartNavBar />)
function useGlobalPath(curPath : string ) {
    return navbars.get(curPath)
}


export default useGlobalPath;
