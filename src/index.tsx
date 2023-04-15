import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DarkModeContextProvider from "./contexts/darkModeContext/darkModeContextProvider";
import UserContextProvider from "./contexts/category/UserContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
