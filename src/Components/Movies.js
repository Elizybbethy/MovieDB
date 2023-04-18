import react, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Ecanto from "../images/Ecanto.jpeg";
import Avatar from "@mui/material/Avatar";
import { CardContent, CardHeader, Typography } from "@mui/material";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
// export default function Movies(){
// const movie = cartoons.data;
const Movies = ({ data }) => {
  // console.log("testing", cartoons);
  const IMG = IMG_URL + data.poster_path;
  const [overview, setOverview]=useState(false);
  const handleClick =()=> {
    setOverview(!overview);
  }
  // console.log("my image", IMG);
  // function comedy({ cartoons }) {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={0}
      >
        {/* {cartoons.map((movie) => (
             <Grid item  key={movie.id} xs={12} md={10}>  */}

        <Grid item xs={12} md={10}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={2}>
              <Card
                sx={{
                  width: "150px",
                  height: "auto",
                  backgroundColor: "#c7d3eb",
                }}
              >
                <CardHeader title={data.original_title} />
                <CardMedia
                  component="img"
                  width="200"
                  height="auto"
                  image={IMG}
                />
                <CardContent>
                  <button variant="contained" color="primary" onClick={handleClick}>Overview</button>
                 {overview &&( <Typography variant="body2" color="text.secondary">
                    {data.overview}
                  </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* ))}  */}
      </Grid>
    </>
    // console.log("my movie", movie)
    // <Movies data={movie} key={movie.id}/>)}
    // {data.map((item) => (
    //   <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
    //     {/* render the content of each item here */}
    //   </Grid>
    // ))}
    //     <div>
    //       const displayCartoons =() =>{
    //         return cartoons.map((cartoon)=>{
    //           return(
    //             <div key={cartoons.id}>
    //               <h4>{cartoons.title}</h4>
    //             </div>
    //           );
    //         });
    //       };
    //         {/* {[].map((movie)=>{
    //             return(
    //             <div key={movie.id}>
    //       <Grid
    //         container
    //         spancing={2}
    //         direction="row"
    //         alignItem="baseline"
    //         justifyContent="Center"
    //       >
    //         <Grid item xs={3} >
    //           <Card sx={{ Width: "50px", height:"50px",backgroundColor: "#c7d3eb" }}>
    //             <CardMedia component="img" src={Ecanto}/>
    //             {/* <Avatar  sx={{ width: 100, height: 200 }} />
    //             {/* </CardMedia> */}
    //             {/* <Avatar
    //               src={Ecanto}
    //               style={{ width: "50px", height: "50px", borderRadius: "0" }}
    //             /> */}
    //             {/* <h4>{movie.title}</h4>
    //           </Card>
    //         </Grid>
    //       </Grid>
    //       </div>
    //       );
    //       })} */}
    // </div>
  );
  // }
};
// }
export default Movies;
