import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Assets/Logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <section className="headerContainer">
        <section className="logoContainer">
          <Link to="/">
            <img src={Logo} alt="Company logo" />
          </Link>
        </section>
        <section className="listContainer">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === "/recipes" ? "active" : ""}>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className={location.pathname === "/bookmarks" ? "active" : ""}>
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
          </ul>
        </section>
        <section className="loginContainer">
          <button className="loginButton">Login</button>
        </section>
      </section>
      {/* <section className="headerContainer">
        <section className="headerLeft">
          <img src={Logo} alt="Logo" />
          <h1>MEALZO</h1>
          <h1 class="logo">
            <span class="logo-main">Delicious</span>
            <span class="logo-sub">Bowl</span>
          </h1>
        </section>
        <section className="headerRight">
          <section className="rightPart">
            <Link to="/recipes">
              <span>Search Recipes</span>
            </Link>
            <Link to="/addrecipe">
              <span>Add Recipes</span>
            </Link>
          </section>
        </section>
      </section> */}
    </>
  );
};

export default Header;
