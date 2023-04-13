import * as React from "react";
import "./Components/Styles.css";

const card = () => {
  return (
    <>
      <div className="movies">
        <img src="assets/images/ecanto.jpeg" className="ecanto"></img>
        <div className="movie-details">
          <div className="box">
            <h4 className="title">Movie Title</h4>
            <p className="rating">8.0</p>
          </div>
          <div className="Details">
            <h1>Details</h1>
            hi there welcome
          </div>
        </div>
      </div>
    </>
  );
};
export default card;
