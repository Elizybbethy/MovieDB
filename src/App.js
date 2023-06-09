import * as React from "react";
import "./App.css";
import Home from "./Home";
import "./Components/Styles.css";
import Card from "./Card";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import { useState, useEffect } from "react";
import { Axios } from "axios";
import Grid from "@mui/material/Grid";


const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=61ccb329d62f6c452da5e881997c3fb3&sort_by=vote_average.desc&vote_count.gte=5000";
function App() {
  const [cartoons, setCartoons] = useState([]);
  const example = ["one", "Two", "three+"];
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // console.log("my data",data);
        setCartoons(data.results);
      });
  }, []);
  console.log("cartoons", cartoons);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Grid container direction="row" spancing={0}>
          {cartoons.map((movie)=>(
            <Grid item key={movie.id} xs={2} spancing={0}>
              <Movies data={movie}/>
            </Grid>
          ))}
        </Grid>
        {/* {cartoons.map((movie) => (
          <Movies data={movie} key={movie.id} />
        ))} */}
        {/* <Movies data={movie}/> */}
      </div>
    </>
  );
  
}

export default App;
