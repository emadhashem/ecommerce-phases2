import React from "react";
import { useLocation } from "react-router-dom";
import useGlobalPath from "./useGlobalPath";
import "./navBar.scss";

function NavBar() {
  const CurNav = useGlobalPath(useLocation().pathname);

  return <div className="nav">{CurNav}</div>;
}

export default NavBar;
