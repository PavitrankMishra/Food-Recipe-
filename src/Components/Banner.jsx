import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <>
      <section className="bannerContainer">
        <section className="leftQuoteContainer">
          <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
        </section>
        <p>
          A diverse collection of vegetables, fruits, herbs, legumes, spices,
          and a wide variety of global cuisines and food items from savory to
          sweet.
        </p>
        <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
      </section>
    </>
  );
};

export default Banner;
