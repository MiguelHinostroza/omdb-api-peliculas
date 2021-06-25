import React, {FunctionComponent} from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {MovieSearched} from "../models/MovieSearched";
import {useHistory} from 'react-router-dom';

interface OwnProps {
    movie: MovieSearched
}

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
    },
    cardCon: {
        height: 150,
    }
}))

type Props = OwnProps;

const MovieItem: FunctionComponent<Props> = ({movie}) => {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => {
        history.push(`/movie/${movie.imdbID}`);
    }

    return (
        <Box p={1} mt={3}>
            <Card className={classes.root} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="400"
                        image={movie.Poster}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.cardCon}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.Title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.Year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>

    );
};

export default MovieItem;
