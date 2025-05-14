import React from "react";
import Header from "./Header";
import "./Recipes.css";
// import {useState, useEffect} from "react";
import Logo from "../Assets/Logo.png";
import Pasta from "../Assets/Pasta.jpg";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

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
            <FontAwesomeIcon icon={faPlus} className="plus" />
            <FontAwesomeIcon icon={faBookmark} className="bookmark" />
            <p className="addHeading">Add Recipe</p>
            <p className="bookmarkHeading">Bookmark Recipe</p>
          </section>
        </section>
        <section className="recipeMiddleContainer">
          <section className="recipeMiddleLeft">
            <section className="recipeSection">
              <section className="recipe1">
                <section className="recipeImage">
                  <img src={Pasta} />
                </section>
                <section className="recipeInner">
                  <p id="itemName">Pizza</p>
                  <p id="personName">Divesh</p>
                </section>
              </section>
              <section className="userSection">
                <FontAwesomeIcon icon={faUser} />
              </section>
            </section>
            <section className="recipeSection">
              <section className="recipe1">
                <section className="recipeImage">
                  <img src={Pasta} />
                </section>
                <section className="recipeInner">
                  <p id="itemName">Pizza</p>
                  <p id="personName">Divesh</p>
                </section>
              </section>
              <section className="userSection">
                <FontAwesomeIcon icon={faUser} />
              </section>
            </section>
            <section className="recipeSection">
              <section className="recipe1">
                <section className="recipeImage">
                  <img src={Pasta} />
                </section>
                <section className="recipeInner">
                  <p id="itemName">Pizza</p>
                  <p id="personName">Divesh</p>
                </section>
              </section>
              <section className="userSection">
                <FontAwesomeIcon icon={faUser} />
              </section>
            </section>
            <section className="recipeSection">
              <section className="recipe1">
                <section className="recipeImage">
                  <img src={Pasta} />
                </section>
                <section className="recipeInner">
                  <p id="itemName">Pizza</p>
                  <p id="personName">Divesh</p>
                </section>
              </section>
              <section className="userSection">
                <FontAwesomeIcon icon={faUser} />
              </section>
            </section>
            <section className="recipeSection">
              <section className="recipe1">
                <section className="recipeImage">
                  <img src={Pasta} />
                </section>
                <section className="recipeInner">
                  <p id="itemName">Pizza</p>
                  <p id="personName">Divesh</p>
                </section>
              </section>
              <section className="userSection">
                <FontAwesomeIcon icon={faUser} />
              </section>
            </section>
            <section className="recipeSection">
              <section className="recipe1">
                <section className="recipeImage">
                  <img src={Pasta} />
                </section>
                <section className="recipeInner">
                  <p id="itemName">Pizza</p>
                  <p id="personName">Divesh</p>
                </section>
              </section>
              <section className="userSection">
                <FontAwesomeIcon icon={faUser} />
              </section>
            </section>
          </section>
          <section className="recipeMiddleRight">This is right part</section>
        </section>
      </section>
    </>
  );
};

export default Recipes;
