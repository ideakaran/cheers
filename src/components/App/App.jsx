import React from "react";
import { Routes, Route } from "react-router-dom";
import BeerPage from "../../pages/BeerPage/BeerPage";
import AppStyle from "./AppStyle";

function App() {
  return (
    <AppStyle className="hz-app">
      <Routes>
        <Route path="/" element={<BeerPage />} />
        <Route path="/beer/:id" element={<p>Not implemented</p>} />
      </Routes>
    </AppStyle>
  );
}

export default App;
