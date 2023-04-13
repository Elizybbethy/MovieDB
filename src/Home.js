import React from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import card from "./Card";
import "./Components/Styles.css";
let API_KEY="api_key=61ccb329d62f6c452da5e881997c3fb3"
let base_url="https://api.themoviedb.org/3"

const Home = () => {
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li><a href="#">Animations</a></li>
              <li><a href="#">Series</a></li>
            <li><a href="#">Popular</a></li>
          </ul>
        </nav>
        <form>
          <div className="search">
            <input
              type="text"
              className="inputText"
              placeholder="search for a movie"
            ></input>
            <button>
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <card/>
      </div>
    </>
  );
};
export default Home;
