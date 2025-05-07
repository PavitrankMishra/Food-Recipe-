import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";

const Header = () => {
  return (
    <>
      <section className="headerContainer">
        <section className="headerLeft">
          <img src={Logo} alt="Logo" />
          <h1>The logo Company</h1>
        </section>
        <section className="headerRight">
          <section className="rightPart">
            <Link to="/recipes">Search Recipes</Link>
            <Link tp="/addrecipe">Add Recipes</Link>
          </section>
        </section>
      </section>
    </>
  );
};

export default Header;
