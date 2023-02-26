import {memo} from "react";

import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {Link} from "react-router-dom";


const MovieTopRated = memo(({movie}) => {

    const {poster_path, original_title, id} = movie


    return (
        <div className={'containerPoster'}>
            <Link to={`/details/${id}`}>
                <div className={'wrapper'}>
                    <PosterPreview key={movie.id} poster={poster_path}/>
                    <div className={'cover'}>
                        <h3 className={'titleMovie'}>{original_title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
});

export {MovieTopRated};