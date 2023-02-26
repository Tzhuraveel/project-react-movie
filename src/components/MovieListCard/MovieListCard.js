import { useNavigate} from "react-router-dom";
import {BookmarkIcon, CalendarIcon} from "@heroicons/react/20/solid";

import css from './MovieListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {moviesRequest} from "../../api";


const MovieListCard = ({movie}) => {

    const {poster_path, title, overview, vote_average, release_date, id, genre_ids} = movie


    const sliceText = () => {
        return overview.slice(0, (overview.length / 1.5))
    }

    const saveMovie = (movie) => {
        let savedMovie = JSON.parse(moviesRequest.getSavedMovie('savedMovie'));
        console.log(savedMovie)

        if(savedMovie?.find(value => value === movie)){
            moviesRequest.setSavedMovie(savedMovie.push(movie))
        }else{

        }
    }

    const navigate = useNavigate();


    return (
        <div className={css.blockCard}>
            <div className={css.blockPosterMovie} onClick={() => navigate(`/details/${id}`)}>
                <PosterPreview poster={poster_path}/>
            </div>

            <div className={css.blockDetailInformation}>
                <div className={css.detailsMovie}>
                    <div className={css.title}>
                        <h3 onClick={() => navigate(`/details/${id}`)}>{title}</h3>
                            <button onClick={() => saveMovie(movie)} className={css.bookMark}>
                                <BookmarkIcon/>
                            </button>
                    </div>
                    <div>
                        <GenreBadge genresMovie={genre_ids}/>
                    </div>
                    <p>{sliceText()}...</p>
                </div>
                <div className={css.starsRating}>
                    <StarsRating stars={vote_average}/>
                    <hr/>
                    <div className={css.genreBadge}>
                        <div className={css.release}>
                            <CalendarIcon className={css.calendar}/>
                            <span className={css.data}>{release_date}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export {MovieListCard};