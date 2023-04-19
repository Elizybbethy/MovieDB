import react from "react";
import Grid from "@mui/material/Grid";
import { Divider, IconButton, InputBase } from "@mui/material";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';

export default function Headers() {
  return (
    <div>
      <Grid
        container
        spancing={2}
        direction="row"
        alignItem="baseline"
        justifyContent="right"
      >
        <Grid item xs={10} md={8}>
          <Grid container>
            <Grid item xs={8} >
            
              <Button variant="contained" color="primary">Popular</Button>
              <Button variant="contained" color="primary">Cartoons</Button>
              <Button variant="contained" color="primary">Comedy</Button>
              
            </Grid>
            <Grid item xs={4}>              
                  <IconButton
                    type="button"
                    sx={{ p: "10px" , backgroundColor: "#f5f5f5" }}
                    aria-label="search"
                   
                  >
                    <SearchIcon />
                  
                  <Divider orientation="vertical" sx={{ height: 28, m: 1 }} />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Movie"
                  />
                  </IconButton>               
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
