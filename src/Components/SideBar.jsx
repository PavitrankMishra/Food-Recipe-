import React from "react";
import "./SideBar.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Assets/Logo.png";

const SideBar = ({ show, onClose }) => {
  console.log(show);
  return (
    <>
      <section className={`sideBarContainer ${show ? "show" : ""}`}>
        <section className="sideBarInnerContainer">
          <section className="sideBarInnerContainer1">
            <section className="sideBarCrossContainer" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} className="cross" />
            </section>
            <section className="sideBarListContainer">
              <ul>
                <li>
                  <section className="iconContainer">
                    <FontAwesomeIcon icon={faHouse} className="homeIcon" />
                  </section>
                  <span>Home</span>
                </li>
                <li>
                  <section className="iconContainer">
                    <FontAwesomeIcon icon={faInfo} className="infoIcon" />
                  </section>
                  <span>About</span>
                </li>
                <li>
                  <section className="iconContainer">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="rightIcon"
                    />
                  </section>
                  <span>Login</span>
                </li>
              </ul>
            </section>
          </section>
          <section className="sideBarInnerContainer2">
            <section className="sideBarLogoContainer">
              <img src={Logo} alt="Logo Image" />
            </section>
            <section className="sideBarNameContainer">
              <h1 className="mealzoHeading">MEALZO</h1>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SideBar;
