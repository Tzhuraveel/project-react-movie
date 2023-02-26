import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import css from './MovieInfo.module.css';
import {imgBaseUrl} from "../../api";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {movieActions} from "../../redux";
import {LoadingInfoMovie} from "../Loading/Loading";

const MovieInfo = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        id && dispatch(movieActions.getElementById({id}))
    }, [id, dispatch])

    const {loading, movie} = useSelector(state => state.movie);


    const {
        genres,
        status,
        tagline,
        runtime,
        budget,
        revenue,
        production_countries,
        original_language,
        production_companies,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average} = movie


    return (
        loading ? <LoadingInfoMovie/> : <div className={css.wrapperMovieInfo}>
            {Object.keys(movie).length !== 0 && <div className={css.containerMovieInfo}>
                <div className={css.leftSide}>
                    <div className={css.poster}>
                        <PosterPreview poster={poster_path}/>
                    </div>
                    <div className={css.containerGeneralInformation}>
                        <div className={css.generalInformation}>
                            <h4 className={css.infoTitle}>Companies</h4>
                            {production_companies.map(({id, logo_path}) => logo_path ?
                                <img className={css.companyPoster} key={id} src={imgBaseUrl + logo_path} alt=""/> : '')}
                            <hr/>
                        </div>
                        <div className={css.generalInformation}>
                            <h4 className={css.infoTitle}>Rating</h4>
                            <StarsRating stars={vote_average}/>
                            <hr/>
                        </div>
                        <div className={css.generalInformation}>
                            <h4 className={css.infoTitle}>Language:</h4>
                            <p className={css.additionalInfo}>{original_language}</p>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className={css.movieInfo}>
                    <h2 className={css.titleMovie}>{original_title}</h2>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Tagline</h2>
                        <p className={css.text}>{tagline}</p>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Genres</h2>
                        <GenreBadge genresMovie={genres}/>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Release Date</h2>
                        <p className={css.text}>{release_date}</p>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Status</h2>
                        <p className={css.text}>{status}</p>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Runtime</h2>
                        <p className={css.text}>{runtime} m</p>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Budget</h2>
                        <p className={css.text}>${budget}</p>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Overview</h2>
                        <p className={css.text}>{overview}</p>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Revenue</h2>
                        <p className={css.text}>${revenue}</p>
                    </div>
                    <div className={css.certainInfo}>
                        <h2 className={css.subTitle}>Country</h2>
                        <p className={css.text}>
                            {production_countries && production_countries.map(country => <span
                                key={country.name}>{country.name}</span>)}
                        </p>
                    </div>

                </div>
            </div>}
        </div>

    );
}

export {MovieInfo};