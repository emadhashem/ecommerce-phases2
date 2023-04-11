import { useEffect, useState } from "react";
import { DarkModeContext } from "./darkModeContext";

interface Props {
  children?: React.ReactNode;
}

const DarkModeContextProvider = ({ children }: Props) => {

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")!) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
