import React from "react";
import { Routes, Route } from "react-router-dom";
import BeerPage from "./pages/BeerPage/BeerPage";

function App() {
  return (
    <div className="hz-app">
      <Routes>
        <Route path="/" element={<BeerPage />} />
        <Route path="/beer/:id" element={<p>Not implemented</p>} />
      </Routes>
    </div>
  );
}

export default App;
