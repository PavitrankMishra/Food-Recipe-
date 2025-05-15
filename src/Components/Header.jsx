import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";

const Header = () => {
  return (
    <>
      <section className="headerContainer">
        <section className="headerLeft">
          {/* <img src={Logo} alt="Logo" /> */}
          <h1>MEALZO</h1>
          {/* <h1 class="logo">
            <span class="logo-main">Delicious</span>
            <span class="logo-sub">Bowl</span>
          </h1> */}
        </section>
        <section className="headerRight">
          {/* <section className="rightPart">
            <Link to="/recipes">
              <span>Search Recipes</span>
            </Link>
            <Link to="/addrecipe">
              <span>Add Recipes</span>
            </Link>
          </section> */}
        </section>
      </section>
    </>
  );
};

export default Header;
