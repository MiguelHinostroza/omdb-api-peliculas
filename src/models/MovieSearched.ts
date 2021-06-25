export interface MovieSearched {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   string;
    Poster: string;
}

export interface MoviesSearched {
    Search:       MovieSearched[];
    totalResults: string;
    Response:     string;
}