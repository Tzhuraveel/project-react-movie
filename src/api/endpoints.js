const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const movie = 'movie';

const urls = {
    movies: `discover/${movie}`,
    genres: `genre/${movie}/list`,
    topRated: `${movie}/top_rated`,
    searchedMovie: `/search/movie`,
    movieById: (id) => `${movie}/${id}`,
    images: (id) => `/${movie}/${id}/images`,


    token: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmEyZDA2ZjFjM2YzNjYwODI0YjkxZTg3MGM5NjU1NCIsInN1YiI6IjYzZWU5YjBhN2YxZDgzMDBkYjhmYzQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rSo-Yz74R8pkY3uN7N2lsSB2IrRsh8y_2me747BUjs'
};

export {
    imgBaseUrl,
    urls
}