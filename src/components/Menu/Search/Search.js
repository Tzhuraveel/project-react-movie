import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

import css from  './Search.module.css'

const Search = () => {


    const navigate = useNavigate();

    const nameMovie = useRef();

    const searchMovie = () => {
        if(nameMovie.current.value !== ''){
            navigate(`/movie/search/${nameMovie.current.value}`)
            nameMovie.current.value = ''
        }
    }




    return (
        <div className={css.searchBlock}>
            <input type="text" className={css.searchMovie} placeholder={'Enter the name of the movie'} ref={nameMovie}/>
            <button className={css.blockIconSearch} onClick={(e) => searchMovie(e)}>
                <MagnifyingGlassIcon className={css.iconSearch}/>
            </button>
        </div>
    );
};

export {Search};