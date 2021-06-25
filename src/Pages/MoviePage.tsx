import React, {FunctionComponent, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import OmdbHttp from "../http/Omdb.http";
import {Movie} from "../models/Movie";
import {makeStyles, Paper} from "@material-ui/core";
import MovieDetails from "../components/MovieDetails";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '90vh',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}))

const MoviePage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const params: any = useParams(); // React Router Dom
    const history = useHistory(); // React Router Dom

    const omdbHttp = OmdbHttp.getInstance(); // Instance

    const [movie, setMovie] = useState<Movie>({}); // State type movie

    const handleMovie = async () => {
        if (!params.id) {
            history.push('/')
        }
        const movieWanted = await omdbHttp.getMoviesById(params.id)
        setMovie(movieWanted);
    }

    useEffect(() => {
        handleMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Paper className={classes.root}>
            <MovieDetails movie={movie}/>
        </Paper>
    );
};

export default MoviePage;
