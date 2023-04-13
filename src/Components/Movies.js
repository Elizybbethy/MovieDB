import react from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Ecanto from "../images/Ecanto.jpeg";
import Avatar from "@mui/material/Avatar";
import { CardContent, CardHeader, Typography } from "@mui/material";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const Movies = ({ data }) => {
  console.log("testing", data);
  const IMG = IMG_URL + data.poster_path;
  console.log("my image", IMG);
  return (
    <>
      {/* <h3>{data.original_title}</h3> */}
      {/* <img src={IMG} alt="movie image" /> */}
      {/* {console.log("my testing url", poster_path)}; */}
      {/* <p>{data.overview}</p> */}
      {/* movie info */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={8}
      >
        {/* <Grid item xs={12} md={10}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Grid item xs={8} md={6}>
              <Button a color="primary" variant="contained" >comedy</Button>
            </Grid> 
          </Grid>
        </Grid> */}
        <Grid item xs={12} md={10}>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={8}>
            <Grid item xs={4}>
              <Card
                sx={{
                  width: "500px",
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
                  <Typography variant="body2" color="text.secondary">
                    {data.overview}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>

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
};

export default Movies;
