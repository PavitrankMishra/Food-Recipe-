import React from "react";
import "./Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="heroSection">
        {/* <p>Tasty</p>
          <p>Food</p>
          <p>Recipes</p>
          <span>Guaranteed</span> */}
        <section className="headingContainer">
          <h1>Tried</h1> <h1>Tasted</h1> <h1>Trusted</h1>{" "}
        </section>
        <span>Spot for The tasty food Recipes</span>
        {/* <h1>
          Tasty Food Recipes <span>Guaranteed</span>
        </h1> */}
      </section>
    </>
  );
};

export default Home;
