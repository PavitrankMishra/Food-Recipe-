import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children }) => {
  return (
    <>
      <section className="buttonContainer">
        <button>{children}</button>
      </section>
    </>
  );
};

export default CustomButton;
