import React from "react";
import MainNavBar from "../../pages/mainPage/MainNavBar";
const navbars = new Map<string , React.ReactNode>()
navbars.set("/" , <MainNavBar />)
function useGlobalPath(curPath : string ) {
    return () => navbars.get(curPath)
}


export default useGlobalPath;
