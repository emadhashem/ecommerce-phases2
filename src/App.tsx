import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<MainPage />} />
    </Routes>
  );
}

export default App;
