import React from "react";
import "./Bookmark.css";

const Bookmark = ({ isVisible, bookMarkedRecipes }) => {
  return (
    <>
      <section className={`bookmarksSection ${isVisible ? "visibility" : ""}`}>
        <section className="bookmarkedVisible">
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
      </section>
    </>
  );
};

export default Bookmark;
