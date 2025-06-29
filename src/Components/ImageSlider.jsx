import React from "react";
import "./ImageSlider.css";
import Pizza from "../Assets/Pizza.jpg";

const ImageSlider = () => {
  return (
    <>
      <section className="sliderContainer">
        <section className="innerSliderContainer">
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
          <section className="imageContainer">
            <img src={Pizza} alt="Pizza Image" className="containerImage" />
          </section>
        </section>
      </section>
    </>
  );
};

export default ImageSlider;
