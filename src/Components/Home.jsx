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
        <h1>
          Tasty Food Recipes <span>Guaranteed</span>
        </h1>
      </section>
    </>
  );
};

export default Home;
