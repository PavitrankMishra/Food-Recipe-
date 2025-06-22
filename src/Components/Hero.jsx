import React from "react";
import "./Hero.css";
import Hero1 from "../Assets/Hero1.png";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="heroContainer">
        <section className="heroLeft">
          <h1>RECIPES</h1>
          <h1>WITH A</h1>
          <span>PERSONAL TOUCH</span>
          <p>
            Not just ingredients — share your memories, notes, and twists with
            every dish. Your kitchen, your story.
          </p>
          <Button location={"/recipes"}>Explore Recipes</Button>
        </section>
        <section className="heroRight">
          <img src={Hero1} alt="Hero Image" />
        </section>
      </section>
    </>
  );
};

export default Hero;
