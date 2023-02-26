import {urls} from "../endpoints";
import {axiosService} from "../../utils";

const savedMovie = 'savedMovie'

const moviesRequest = {
    getAllMovies: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieByGenres: ({genre, page}) => axiosService.get(urls.movies, {params: {with_genres: genre, page: page }}),
    getTopRatedMovies: () => axiosService.get(urls.topRated),
    getMovieById: (id) => axiosService.get(urls.movieById(id)),
    getGenresMovie: () => axiosService.get(urls.genres),
    getVideoMovie: (id) => axiosService.get(urls.movieVideo(id)),
    getSearchedMovie: ({name, page}) => axiosService.get(urls.searchedMovie, {params: {query: name, page: page}}),

    setSavedMovie: (movie) => {
        localStorage.setItem(savedMovie, JSON.stringify([movie]))
    },

    getSavedMovie: () => localStorage.getItem(savedMovie),


    deleteSavedMovie: () => localStorage.removeItem(savedMovie)
}

export {
    moviesRequest
}