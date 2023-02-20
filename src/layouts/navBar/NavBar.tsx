import React from "react";
import { useLocation } from "react-router-dom";
import useGlobalPath from "./useGlobalPath";

function NavBar() {
  const CurNav = useGlobalPath(useLocation().pathname);

  return <>{CurNav}</>;
}

export default NavBar;
