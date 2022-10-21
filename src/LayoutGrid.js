import * as React from 'react';
import MovieCard from "./MovieCard";
import {Grid} from "@mui/material";

export default function LayoutGrid(props){

    const filter = (query, movie, props) => {
        if (!query) {
            return  <MovieCard movie = {movie} key={movie.id} current={props.current} setCurrent ={props.setCurrent} />;
        } else {
            return props.movies.filter(() =>(
                <MovieCard movie = {movie} key={movie.id} current={props.current} setCurrent ={props.setCurrent} />
            ).includes(query));
        }
    };

    return(
        <Grid container spacing={2}>
            {props.movies.map( (movie) => {
               return ( <Grid item xs={4}> { (filter(props.search, movie, props))}</Grid>)
            })}
        </Grid>
    )
}