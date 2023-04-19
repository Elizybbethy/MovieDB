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
  const [overview, setOverview] = useState(false);
  const handleClick = () => {
    setOverview(!overview);
  };
  // console.log("my image", IMG);
  // function comedy({ cartoons }) {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
      
            <Grid item xs={2} spacing={0}>
              <Card
                sx={{
                  width: "150px",
                  height: "auto",
                  backgroundColor: "#c7d3eb",
                  margin: "2px auto"
                }}
              >
                <CardHeader title={data.original_title} />
                <CardMedia
                  component="img"                  
                  image={IMG}
                />
                <CardContent>
                  <button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                  >
                    Overview
                  </button>
                  {overview && (
                    <Typography variant="body2" color="text.secondary">
                      {data.overview}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          {/* </Grid>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Movies;
