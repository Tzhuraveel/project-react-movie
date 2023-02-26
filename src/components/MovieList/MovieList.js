import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './MovieList.module.css'
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Pagination} from "../Pagination/Pagination";
import {movieActions} from "../../redux";
import {Loading} from "../Loading/Loading";



const MovieList = () => {


    const dispatch = useDispatch();

    const [query, ] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAllMovies({page: query.get('page')}))
    }, [dispatch, query])

    const {loading, movies, page} = useSelector(state => state.movie);



    return (
        loading ?
            <Loading/>
            :
            <div>
                <hr className={css.hr}/>
                <div className={css.containerAllMovie}>
                    {movies.length !== 0 && movies.map((value) =>  <MovieListCard key={value.id} movie={value}/>)}
                </div>
                <Pagination page={page}/>
            </div>
    );
};

export {MovieList};