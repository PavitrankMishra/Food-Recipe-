import React from "react";
import Header from "./Header";
import "./Recipes.css";
// import {useState, useEffect} from "react";
import Logo from "../Assets/Logo.png";

const Recipes = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Header />
      <section className="recipeContainer">
        <section className="recipeHeadingContainer">
          <section className="containerLeft">
            <img src={Logo} className="headingLogo" />
            <input type="text" placeholder="Search over 1,000,000 recipes" />
          </section>
          <section className="containerRight">
            <p>Add Recipe</p>
            <p>Bookmark Recipe</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Recipes;
