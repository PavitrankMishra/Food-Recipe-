import React from "react";
import "../Components/AboutUs.css";
import vegPizza from "../Assets/vegPizza.jpg";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const AboutUs = () => {
  return (
    <>
      <section className="aboutContainer">
        <section className="left1">
          <h1>About Us</h1>
          <p>Discover the authentic flavors of</p>
          <section className="special">
            <Typewriter
              options={{
                strings: ["Chinese", "Italian", "Spanish"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />{" "}
          </section>
          <p>cuisine foods.</p>
          <section className="para">
            <span>
              Experience the rich and diverse flavors of Chinese cuisine, where
              traditional spices, bold aromas, and time-honored recipes come
              together to create unforgettable dishes.
            </span>
          </section>
          <Link to="/recipes">
            <button>Explore Recipes</button>
          </Link>
        </section>
        <section className="right1">
          <section className="rightimageContainer">
            <img src={vegPizza} className="vegPizza" />
          </section>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
