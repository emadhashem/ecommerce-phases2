import React, { useEffect, useState } from "react";
import useGetDataApi from "./useGetDataApi";
import imgSrc from "../../assets/svgs/logo.svg";
import "./splash.style.scss";
function SplashPage() {
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
      <div className="splash-container">
        <img src={imgSrc} />
        <div className="footer-title">
          <span>أمان , سرعة , تنوع </span>
        </div>
      </div>
    );
}

export default SplashPage;
