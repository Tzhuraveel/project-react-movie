import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './MovieByGenre.module.css';
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Pagination} from "../Pagination/Pagination";
import {genreActions} from "../../redux";
import {Loading} from "../Loading/Loading";

const MovieByGenre = () => {


    const {genreId} = useParams();

    const dispatch = useDispatch();

    const [query, ] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(genreActions.getMovieByGenres({genre: {genreId}, page: query.get('page')}))
    }, [dispatch, query, genreId])

    const {page, loading, moviesByGenre} = useSelector(state => state.genre);

    return (
        loading ?
            <Loading/>
            :
            <div>
                <div className={css.searchMovieByGenre}>Search for a movie by genre</div>
                <hr className={css.hr}/>
                <div className={css.containerMovieByGenre}>
                    {moviesByGenre.length !== 0 && moviesByGenre.map((value) =>  <MovieListCard key={value.id} movie={value}/>)}
                </div>
                {moviesByGenre.length === 0 && <div className={css.fault}>Sorry, but there is no movie with this genre</div>}
                <Pagination page={page}/>
            </div>
    );
};

export {MovieByGenre};