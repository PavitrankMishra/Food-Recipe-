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
import { faClock } from "@fortawesome/free-regular-svg-icons";
// import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import a from "../Assets/vegPizza.jpg";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Recipes = () => {
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
          <section className="recipeMiddleRight">
            <section className="sec-1">
              <img src={a} alt="Something" />
              <p>Something</p>
            </section>
            <section className="sec-2">
              <section className="secInner">
                <section className="clockContainer">
                  <FontAwesomeIcon icon={faClock} className="clock" />
                  <p>60 Minutes</p>
                </section>
                <section className="userContainer">
                  <FontAwesomeIcon icon={faUser} className="user" />
                  <p>
                    <span>4</span> Servings
                  </p>
                  <FontAwesomeIcon icon={faMinus} className="minus" />
                  <FontAwesomeIcon icon={faPlus} className="plus" />
                </section>
              </section>
              <section className="secOuter">
                <section className="likeContainer">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                </section>
              </section>
            </section>
            <section className="sec-3">
              <h2>Recipe Ingredients</h2>
              <ul className="listContainer">
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className="check" />
                  <p>400 can chickpeas, rinsed and drained</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className="check" />
                  <p>400 can chickpeas, rinsed and drained</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className="check" />
                  <p>400 can chickpeas, rinsed and drained</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className="check" />
                  <p>400 can chickpeas, rinsed and drained</p>
                </li>
              </ul>
              <button className="addToCart">
                <FontAwesomeIcon icon={faCartShopping} />
                ADD TO SHOPPING LIST
              </button>
            </section>
            <section className="sec-4">
              <h1>HOW TO COOK IT</h1>
              <p>
                The recipe was carefully designed and tested by{" "}
                <stron>BBC Good Food.</stron>
              </p>
              <p>Please check out directions at their website.</p>
              <button>DIRECTIONS</button>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Recipes;
