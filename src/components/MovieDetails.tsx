import React, {FunctionComponent} from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {Movie} from "../models/Movie";

interface OwnProps {
    movie: Movie
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    subContainerInfo: {
        width: '100%'
    },
    imgPoster: {
        minHeight: '70vh',
        objectFit: 'cover'
    },
    containerImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: '90vh',

    },
    containerInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: theme.spacing(3)
    },
}))

const MovieDetails: FunctionComponent<Props> = ({movie}) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={5} className={classes.containerImg}>
                <img className={classes.imgPoster} src={movie.Poster} alt=""/>
            </Grid>
            <Grid item xs={12} md={7} className={classes.containerInfo}>
                <div className={classes.subContainerInfo}>
                    <Typography variant="h2">{movie.Title} </Typography>
                    <Typography align="justify" variant="h4">Rating: {movie.imdbRating}  </Typography>
                    <Rating name="read-only" max={10 / 2} value={parseInt(movie?.imdbRating as string) / 2} readOnly/>
                    <Typography variant="h6">Language: {movie.Language} </Typography>
                    <Typography variant="h6">Actors: {movie.Actors} </Typography>
                    <Typography variant="h6">BoxOffice: {movie.BoxOffice} </Typography>
                    <Typography variant="h6">Released: {movie.Released} </Typography>
                    <Typography variant="h6">Production: {movie.Production} </Typography>
                    <Typography variant="h6">Plot: <br/> {movie.Plot} </Typography>
                </div>
            </Grid>
        </Grid>


    );
};

export default MovieDetails;