import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Recipes from "./Components/Recipes";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
