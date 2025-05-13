import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Recipes from "./Components/Recipes";
import NotFound from "./Components/NotFound";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);
  const API_KEY = "77cd4da4-562b-4655-b264-eb7c881297d4";
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
        );
        if (!res.ok) {
          throw new Error("The response was not ok");
        }

        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/recipes" element={<Recipes data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
