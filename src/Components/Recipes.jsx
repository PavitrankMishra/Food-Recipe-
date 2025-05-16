import React, { useEffect, useState } from "react";
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
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Recipes = ({ data, recipe, getData }) => {
  let [res_Per_Page, setResults_Per_Page] = useState(10);
  let [page, setPage] = useState(1);
  let startIndex = (page - 1) * res_Per_Page;
  let endIndex = page * res_Per_Page;
  const currentData = data?.slice(startIndex, endIndex);
  if (data) {
    console.log(data);
    console.log(data.length);
  }

  function handlePreviousList() {
    console.log("Handle Prev List Clicked");
    setPage((p) => p - 1);
    console.log(page);
  }

  function handleNextList() {
    console.log("Handle NExt Lit clicked");
    setPage((p) => p + 1);
    console.log(page);
  }
  let d1 = [{ ...recipe }];

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getData(inputValue);
    // console.log(inputValue);
  }, [inputValue]);
  return (
    <>
      <Header />
      <section className="recipeContainer">
        <section className="recipeHeadingContainer">
          <section className="containerLeft">
            <img src={Logo} className="headingLogo" />
            <input
              type="text"
              placeholder="Search over 1,000,000 recipes"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
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
            <section>
              {currentData && currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <>
                    <section className="recipeSection" key={index}>
                      <section className="recipe1">
                        <section className="recipeImage">
                          <img src={item.image_url} alt={item.title} />
                        </section>
                        <section className="recipeInner">
                          <p id="itemName">{item.title}</p>
                          <p id="personName">{item.publisher}</p>
                        </section>
                      </section>
                      <section className="userSection">
                        <FontAwesomeIcon icon={faUser} />
                      </section>
                    </section>
                  </>
                ))
              ) : (
                <p>There is no data</p>
              )}
              <section className="buttonContainer">
                <button
                  className="butonLeft"
                  onClick={handlePreviousList}
                  disabled={page === 1}
                >
                  Prev
                </button>
                <button
                  className="buttonRight"
                  onClick={handleNextList}
                  disabled={page >= Math.ceil(data?.length / res_Per_Page)}
                >
                  Next
                </button>
              </section>
            </section>
          </section>

          <section className="recipeMiddleRight">
            {d1 && d1.length > 0 ? (
              d1.map((i, index) => (
                <>
                  <section className="sec-1">
                    <img src={i.image_url} alt="Something" />
                    <p>Something</p>
                  </section>
                  <section className="sec-2">
                    <section className="secInner">
                      <section className="clockContainer">
                        <FontAwesomeIcon icon={faClock} className="clock" />
                        <p>{i.cooking_time} minutes</p>
                      </section>
                      <section className="userContainer">
                        <FontAwesomeIcon icon={faUser} className="user" />
                        <p>
                          <span>{i.servings}</span> Servings
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

                    {i.ingredients && i.ingredients.length > 0 ? (
                      <ul className="listContainer">
                        {i.ingredients.map((ig, index) => (
                          <li key={index}>
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              className="check"
                            />
                            <p>{`${ig.quantity} ${ig.unit} ${ig.description}`}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>There are no ingredients listed.</p>
                    )}

                    <button className="addToCart">ADD TO SHOPPING LIST</button>
                  </section>

                  <section className="sec-4">
                    <h1>HOW TO COOK IT</h1>
                    <p>
                      The recipe was carefully designed and tested by{" "}
                      <strong>{i.publisher}.</strong>
                    </p>
                    <p>Please check out directions at their website.</p>
                    <Link to={i.source_url}>
                      <button className="directions">
                        DIRECTIONS <FontAwesomeIcon icon={faArrowRightLong} />
                      </button>
                    </Link>
                  </section>
                </>
              ))
            ) : (
              <p>There is no data</p>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Recipes;
