import {useSearchParams} from "react-router-dom";

import css from './Pagination.module.css'

const Pagination = ({page}) => {

    const [query, setQuery] = useSearchParams({page: '1'});


    return (
        <div className={css.containerPagination}>
            <button className={css.buttonPagination} disabled={+query.get('page') -1 === 0} onClick={() => setQuery(() => ({page: +query.get('page') - 1}))}>prev</button>
            <button className={css.buttonPagination} disabled={+query.get('page') >= page} onClick={() => setQuery(() => ({page: +query.get('page') + 1}))}>next</button>
        </div>
    );
};

export {Pagination};