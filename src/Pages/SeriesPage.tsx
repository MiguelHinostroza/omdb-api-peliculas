import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';
import {Box, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import OmdbHttp, {EnumMovieType} from "../http/Omdb.http";
import {MovieSearched} from "../models/MovieSearched";
import MovieItem from "../components/MovieItem";

interface OwnProps {
}

type Props = OwnProps;
const useStyles = makeStyles(theme => ({
    textInput: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
    }
}))

const SeriesPage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const [movies, setMovies] = useState<MovieSearched[]>([]);
    const [search, setSearch] = useState('avengers');

    const ombdHttp = OmdbHttp.getInstance()

    const handleMovies = async () => {
        const movies = await ombdHttp.getMoviesBySearch(search, EnumMovieType.series);
        setMovies(movies.Search)
    }
    const handleChange = (e: ChangeEvent<any>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        handleMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        handleMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (

        <Grid container>
            <Grid item xs={12}>
                <Box p={3}>
                    <Typography variant="h2">
                        Series
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth value={search} onChange={handleChange}
                           className={classes.textInput}
                           label="Search"
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

export default SeriesPage;

