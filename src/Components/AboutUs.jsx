import React from "react";
import "../Components/AboutUs.css";
import vegPizza from "../Assets/vegPizza.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="aboutContainer">
        <section className="left1">
          <h1>About Us</h1>
          <p>Discover the authentic flavors of chinese cuisine foods.</p>
          <section className="para">
            <span>
              Experience the rich and diverse flavors of Chinese cuisine, where
              traditional spices, bold aromas, and time-honored recipes come
              together to create unforgettable dishes.
            </span>
          </section>
          <button>Explore Recipes</button>
        </section>
        <section className="right1">
            <section className="rightimageContainer">
                <img src={vegPizza} className="vegPizza"/>
            </section>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
