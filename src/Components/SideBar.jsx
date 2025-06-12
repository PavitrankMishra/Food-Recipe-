import React from "react";
import "./SideBar.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ show, onClose }) => {
  console.log(show);
  return (
    <>
      <section className={`sideBarContainer ${show ? "show" : ""}`}>
        {/* <section className={`sideBar ${show ? "show" : ""}`}> */}
        <section className="sideBarCrossContainer" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} className="cross" />
        </section>
        <section className="sideBarListContainer">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </section>
        {/* </section> */}
      </section>
    </>
  );
};

export default SideBar;
