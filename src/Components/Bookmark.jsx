import React from "react";
import "./Bookmark.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bookmark = ({ isVisible, bookMarkedRecipes, setIsVisible }) => {
  const handleCross = () => {
    setIsVisible((prev) => !prev);
    console.log(isVisible);
  };
  return (
    <>
      <section
        className={`bookmarksSection ${
          isVisible ? "visibility" : "novisibility"
        }`}
      >
        <section className="bookmarkedVisible">
          <section className="bookrecipeContainer">
            {bookMarkedRecipes.length > 0 ? (
              bookMarkedRecipes.map((item) => (
                <section key={item.id} className="content">
                  <section className="imgDiv">
                    <img src={item.image_url} alt={item.title} />
                  </section>
                  <section>
                    <p>{item.title}</p>
                    <p>{item.publisher}</p>
                  </section>
                </section>
              ))
            ) : (
              <p>No bookmarks yet</p>
            )}
          </section>
          <section>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleCross}
              className="crossicon"
            />
          </section>
        </section>
      </section>
      {/* <section className={`bookmarksSection ${isVisible ? "visibility" : "novisiblity"}`}>
        <section className="bookmarkedVisible">
          <FontAwesomeIcon icon={faXmark} />
          {bookMarkedRecipes.length > 0 ? (
            bookMarkedRecipes.map((item) => (
              <section key={item.id} className="content">
                <section className="imgDiv">
                  <img src={item.image_url} alt={item.title} />
                </section>
                <section>
                  <p>{item.title}</p>
                  <p>{item.publisher}</p>
                </section>
              </section>
            ))
          ) : (
            <p>No bookmarks yet</p>
          )}
        </section>
      </section> */}
    </>
  );
};

export default Bookmark;
