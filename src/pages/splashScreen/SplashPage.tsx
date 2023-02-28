import React, { useContext, useEffect, useState } from "react";
import useGetDataApi from "./useGetDataApi";
import imgSrc from "../../assets/svgs/logo.svg";
import darkImgSrc from "../../assets/svgs/darklogo.svg";

import "./splash.style.scss";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";

function SplashPage() {
  const { darkMode } = useContext(DarkModeContext);

  const [done, setdone] = useState(false);
  const getDataApi = useGetDataApi();
  useEffect(() => {
    (async () => {
      const res = await getDataApi();
      setdone(res);
    })();
  }, []);
  if (done) return null;
  else
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div className="splash-container">
          {darkMode ? (
            <img src={darkImgSrc} alt="" />
          ) : (
            <img src={imgSrc} alt="" />
          )}
          <div className="footer-title">
            <span>أمان , سرعة , تنوع </span>
          </div>
        </div>
      </div>
    );
}

export default SplashPage;
