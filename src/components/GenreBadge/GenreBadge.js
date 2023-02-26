import {Link} from "react-router-dom";

import css from './GenreBadge.module.css'
import {useSelector} from "react-redux";

const GenreBadge = ({genresMovie}) => {

    const {genres} = useSelector(state => state.genre);

    let allGenres;

    if(genresMovie.find(e => e.constructor.name === 'Object')){
        allGenres = genresMovie
    }else{
        allGenres = genres.filter(value => value.id === (genresMovie.find(genre => genre === value.id)));
    }

    return (
        <div className={css.badge}>
            {allGenres && allGenres.map(value => <Link key={value.id} to={`/movie/genres/${value.id}`} state={[value.id]}>{value.name}</Link>)}
        </div>
    );
};

export {GenreBadge};