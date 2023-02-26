import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from './SearchMovie.module.css';
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Pagination} from "../Pagination/Pagination";
import {searchAction} from "../../redux";
import {Loading} from "../Loading/Loading";

const SearchMovie = () => {



    const {name} = useParams()

    const [query, ] = useSearchParams({page: '1'});


    const dispatch = useDispatch();



    useEffect(() => {
        name && dispatch(searchAction.getSearchedMovie({name: name, page: query.get('page')}))
    }, [name, query, dispatch])

    const {page, loading, searchedMovie} = useSelector(state => state.search);

    return (
        loading ?
            <Loading/>
            :
            <div>
                <div className={css.searchMovieByName}>Search for a movie called: {name}</div>
                <hr className={css.hr}/>
                <div className={css.containerSearchedMovie}>
                    {searchedMovie.length !== 0 && searchedMovie.map((value) =>  <MovieListCard key={value.id} movie={value}/>)}
                </div>
                {searchedMovie.length === 0 &&  <div className={css.fault}>Sorry, but there is no movie with this name</div>}
                <Pagination page={page}/>
            </div>
    );
};

export {SearchMovie};