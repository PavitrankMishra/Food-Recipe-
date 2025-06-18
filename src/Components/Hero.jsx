import React from "react";
import "./Hero.css";
import Hero1 from "../Assets/Hero1.png";

const Hero = () => {
  return (
    <>
      <section className="heroContainer">
        <section className="heroLeft"></section>
        <section className="heroRight">
          <img src={Hero1} alt="Hero Image" />
        </section>
      </section>
    </>
  );
};

export default Hero;
