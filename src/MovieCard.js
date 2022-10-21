import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function MovieCard(props) {

    function cardSelected(){
        console.log("Movie selected...")
        props.setCurrent(props.movie)
    }

    return (
        <Card sx={{ maxWidth: 345 }} onClick={ () => {cardSelected()}}>
            <CardMedia
                component="img"
                height="400"
                image= {props.movie.poster}
                alt="" />
        </Card>
    );
}
