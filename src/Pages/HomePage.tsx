import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';
import OmdbHttp, {EnumMovieType} from "../http/Omdb.http";
import {Grid, makeStyles, TextField} from "@material-ui/core";
import {MovieSearched} from "../models/MovieSearched";
import MovieItem from "../components/MovieItem";

interface OwnProps {
}

const useStyles = makeStyles(theme => ({
    textInput: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
    },
    root: {
        maxWidth: 400,
    },
    cardCon: {
        height: 130,
    }
}))

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const [movies, setMovies] = useState<MovieSearched[]>([]);
    const [search, setSearch] = useState('avengers');

    const omdbHttp = OmdbHttp.getInstance();

    const handleMovie = async () => {
        const movies = await omdbHttp.getMoviesBySearch(search, EnumMovieType.movie, 1);
        setMovies(movies.Search)
    }
    const handleChange = (e: ChangeEvent<any>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        handleMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    /*   useEffect(() => {
           console.log(search);
       }, [search]);*/

    return (
        <Grid container>
            <Grid item xs={12}>

                <TextField fullWidth value={search} onChange={(handleChange)}
                           label={search}
                           className={classes.textInput}
                           variant="filled"/>

            </Grid>

            {
                movies && movies.map(movie => (
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <MovieItem movie={movie}/>
                    </Grid>
                ))
            }

        </Grid>
    );
};

export default HomePage;
