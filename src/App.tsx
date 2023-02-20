import React from "react";
import { Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalLayOut from "./layouts/globalLayout/GlobalLayOut";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <GlobalLayOut>
      <Navbar />
      <Routes>
      {/* <Route path="/home" element={<MainPage />} /> */}
      <Route path="/" element={<MainPage />} />
    </Routes>
    </GlobalLayOut>
  );
}

export default App;
