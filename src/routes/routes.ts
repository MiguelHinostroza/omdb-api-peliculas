import {IRoute} from "../models/IRoute";
import HomePage from "../Pages/HomePage";
import SeriesPage from "../Pages/SeriesPage";
import MoviePage from "../Pages/MoviePage";

export default [
    {
        component: HomePage,
        name: 'home',
        path: '/omdb-api-peliculas',
        exact: true
    },
    {
        component: MoviePage,
        name: 'movie-id',
        path: '/movie/:id',
        exact: true
    },
    {
        component: SeriesPage,
        name: 'series',
        path: '/series',
        exact: true
    }
] as IRoute[];