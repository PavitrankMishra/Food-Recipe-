import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Recipes from "./Components/Recipes";
import NotFound from "./Components/NotFound";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);
  // const [data2, setData2] = useState([]);
  const API_KEY = "77cd4da4-562b-4655-b264-eb7c881297d4";

  useEffect(() => {
    fetch("https://forkify-api.herokuapp.com/api/search?q=pasta")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.recipes); // or whatever your response structure is
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    )
      .then((res) => res.json())
      .then((resData) => {
        setRecipe(resData.data.recipe);
        // console.log(resData.data.recipe.length);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  console.log(recipe);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/recipes"
          element={<Recipes data={data} recipe={recipe} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
