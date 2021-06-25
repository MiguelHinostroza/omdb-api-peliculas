import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Switch} from "react-router-dom";
import routes from "./routes/routes";
import SubRoute from "./routes/SubRoute";
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import FooterApp from "./components/FooterApp";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        width: '100%',
    },
    navbar: {
        padding: theme.spacing(3),
    },
    itemLink: {
        textDecoration: 'none'
    },
    active: {
        color: theme.palette.primary.contrastText,
    }
}))

function App() {
    const classes = useStyles();

    return (

        <Box className={classes.root}>
            <Container>
                <BrowserRouter>
                    <Grid container className={classes.navbar}>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">
                                OMDB API Peliculas
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography component={NavLink} exact={true} className={classes.itemLink}
                                        activeClassName={classes.active} to="/omdb-api-peliculas" noWrap
                                        color="secondary"
                                        variant="h6">
                                Movies
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography component={NavLink} exact={true} className={classes.itemLink}
                                        activeClassName={classes.active} to="/series"
                                        color="secondary" variant="h6">
                                Series
                            </Typography>
                        </Grid>
                        {/*<Grid item xs={4} md={2}>
                            <Typography component={NavLink} exact={true} className={classes.itemLink}
                                        activeClassName={classes.active} to="/episodes"
                                        color="secondary" variant="h6">
                                Episodes
                            </Typography>
                        </Grid>*/}

                    </Grid>


                    <Switch>
                        {
                            routes.map((route, i) => (<SubRoute key={i} {...route}/>))
                        }
                    </Switch>

                </BrowserRouter>
                <FooterApp/>
            </Container>
        </Box>

    );
}

export default App;
