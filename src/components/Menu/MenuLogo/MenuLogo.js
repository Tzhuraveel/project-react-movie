import {Link} from "react-router-dom";

import css from './MenuLogo.module.css'

const MenuLogo = () => {


    return (
        <div className={css.logo}>
            <Link to={'/'}>
                <span className={css.blackLetter}>movie </span>
                <span className={css.redLetter}>net</span>
            </Link>
        </div>
    );
};

export {MenuLogo};