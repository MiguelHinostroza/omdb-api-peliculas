import HttpOmdb from "../utils/httpOmdb.util";
import {MoviesSearched} from "../models/MovieSearched";
import {Movie} from "../models/Movie";

export enum EnumMovieType {
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

export type TypesMovieType = 'movie' | 'series' | 'episode';

const getType = (type?: TypesMovieType): string => {
    return type ? `&type${type}` : '';
}

const getPage = (page?: number) => {

    if (page && (page >= 1 || page <= 100)) {
        return `&page${page}`;
    }

    return '';

}

export default class OmdbHttp {
    public static instance: OmdbHttp;

    private constructor() {
    }

    //Singleton
    public static getInstance(): OmdbHttp {
        if (!OmdbHttp.instance) {
            OmdbHttp.instance = new OmdbHttp();
        }
        return OmdbHttp.instance;
    }

    //Get Movies
    async getMoviesBySearch(search: string, type?: TypesMovieType, page?: number): Promise<MoviesSearched> {
        const movies: MoviesSearched = await HttpOmdb.get(`?s=${search}${getType(type)}${getPage(page)}`);
        return movies;
    }

    //GetMovieById
    async getMoviesById(id: string): Promise<Movie> {
        const movie: Movie = await HttpOmdb.get(`?i=${id}`);
        return movie;
    }


}
