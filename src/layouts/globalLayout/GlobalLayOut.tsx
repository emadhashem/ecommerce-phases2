import { useContext } from "react";
import { IComponentPorps } from "../../shared/types";
import NavBar from "../navBar/NavBar";
import "./globalLayOut.style.scss";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";

function GlobalLayOut({ children }: IComponentPorps) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="globallayout-container">
        <NavBar />
        <div className="layout-body">{children}</div>
      </div>
    </div>
  );
}

export default GlobalLayOut;
