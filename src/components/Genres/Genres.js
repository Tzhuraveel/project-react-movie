import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import css from './Genres.module.css';
import {genreActions} from "../../redux";


const Genres = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genre);

    const [chosenGenre, setChosenGenre] = useState([]);


    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])


    const filter = (genre) => {
        setChosenGenre(prev => prev.find(value => value?.id === genre.id) ? [...prev] : [...prev, genre]);
    }




    return (
        <div>
            <div className={css.containerGenre}>
                {genres.length !== 0 && genres.map(value =>
                    <div key={value.id} className={css.linkGenre}>
                        <span onClick={() => filter(value)}>{value.name}</span>
                    </div>
                )}
            </div>
            {
                chosenGenre.length !== 0 &&
                <div className={css.wrapperSelectedGenre}>
                    <div className={css.selectedGenre}>
                        {chosenGenre.map(value => (<span className={css.genre} key={value.id}>{value.name}</span>))}
                    </div>
                    <div className={css.wrapperButton}>
                        <hr/>
                        <Link to={`/movie/genres/${chosenGenre.map(value => value.id).join(',')}`}>
                            <button className={css.buttonSearch} onClick={() => setChosenGenre([])}>search</button>
                        </Link>
                        <button className={css.buttonReset} onClick={() => setChosenGenre([])}>reset</button>
                    </div>

                </div>
            }
        </div>
    );
};

export {Genres};