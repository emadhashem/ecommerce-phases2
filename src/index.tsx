import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DarkModeContextProvider from "./contexts/darkModeContext/darkModeContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
