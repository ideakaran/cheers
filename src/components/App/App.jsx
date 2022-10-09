import React from "react";
import { Routes, Route } from "react-router-dom";
import BeerPage from "../../pages/BeerPage/BeerPage";
import AppStyle from "./AppStyle";
import { PageNotFound } from "../index";

function App() {
  return (
    <AppStyle className="hz-app">
      <Routes>
        <Route path="/" element={<BeerPage />} />
        <Route
          path="/beer/:id"
          element={<p className="hz-beer-id-page">Not implemented</p>}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
