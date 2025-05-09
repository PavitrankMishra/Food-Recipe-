import React from "react";
import "./Home.css";
import Header from "./Header";
import Pizza from "../Assets/Pizza.jpg";
import Burger from "../Assets/Burger.webp";
import Noodles from "../Assets/Noodles.jpg";
import FrenchFries from "../Assets/FrenchFries.webp";
import Pasta from "../Assets/Pasta.jpg";
import Cake from "../Assets/cake.webp";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Working from "./Working";

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
      </section>
      <section className="imageContainer">
        <section className="foodImages">
          <section className="food">
            <img src={Pizza} alt="pizza" />
          </section>
          <section className="food">
            <img src={Pasta} />
          </section>
          <section className="food">
            <img src={Burger} />
          </section>
          <section className="food">
            <img src={Cake} />
          </section>
          <section className="food">
            <img src={FrenchFries} />
          </section>
          <section className="food">
            <img src={Cake} />
          </section>
          <section className="food">
            <img src={Noodles} />
          </section>
        </section>
        <section aria-hidden className="foodImages">
          <section className="food">
            <img src={Pizza} alt="pizza" />
          </section>
          <section className="food">
            <img src={Pasta} />
          </section>
          <section className="food">
            <img src={Cake} />
          </section>
          <section className="food">
            <img src={Burger} />
          </section>

          <section className="food">
            <img src={Cake} />
          </section>
          <section className="food">
            <img src={FrenchFries} />
          </section>
          <section className="food">
            <img src={Noodles} />
          </section>
        </section>
      </section>
      <AboutUs />
      <Banner />
      <Working />
    </>
  );
};

export default Home;
