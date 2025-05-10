import React from "react";
import "./Working.css";

const Working = () => {
  return (
    <>
      <section className="workingContainer">
        <h1>Our Working</h1>
        <section className="timeline">
          <section className="timelineContainer leftContainer">
            <section className="textBox">
              <h2>Search a Recipe</h2>
              <p>
                Search through a wide variety of recipes across cuisines,
                ingredients, and flavors to find the perfect dish for any
                occasion.
              </p>
            </section>
          </section>
          <section className="timelineContainer rightContainer">
            <section className="textBox">
              <h2>Bookmark the Recipe</h2>
              <p>
                Save your favourite dishes for quick access anytime with just
                one click.
              </p>
            </section>
          </section>
          <section className="timelineContainer leftContainer">
            <section className="textBox">
              <h2>Increase the serving</h2>
              <p>
                Adjust the number of servings to automatically scale all
                ingredients, making it easy to cook.
              </p>
            </section>
          </section>
          <section className="timelineContainer rightContainer">
            <section className="textBox">
              <h2>Add a new Recipe</h2>
              <p>
                Create and add your own delicious recipe from scratch—customize
                ingredients, steps, and make it uniquely yours to share or save
                for later
              </p>
            </section>
          </section>
          <section className="timelineContainer leftContainer">
            <section className="textBox">
              <h2>Get directions for cooking</h2>
              <p>
                Follow step-by-step cooking directions to prepare your recipe
                with ease and confidence, from prep to plating
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Working;
