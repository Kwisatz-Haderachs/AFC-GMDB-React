import * as React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Grid, TextField} from "@mui/material";
import {useState} from "react";

export default function DisplayMovie(props) {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");

    function handleChange(e){
        setText(e.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target)
        setComments([...comments, text])
    }


    return(
        <Grid container spacing={2}>
            <Grid item xs = {12}>
                <span id="return" onClick={()=>{props.setCurrent(null)}}> Return </span>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardMedia
                        component="img"
                        height="600"
                        image= {props.current.poster}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.current.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Starring: {props.current.actors} {"\n"}
                            Directed by: {props.current.director} {"\n"}
                            Genre: {props.current.genre}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <div id="comment">
                    <ul>
                        {comments.map(comment => {return <li key={comment}> {comment} </li> })}
                    </ul>
                </div>
                <TextField
                    id="filled-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange = {(e) => handleChange(e)}
                    />
                <Button type="submit" onClick={(event) => handleSubmit(event)}> Submit </Button>
            </Grid>
        </Grid>
)
}
