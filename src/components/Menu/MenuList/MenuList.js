import {Link} from "react-router-dom";
import cx from 'classnames'

import {SwitchTheme} from "../SwitchTheme/SwitchTheme";
import css from './MenuList.module.css'
import {Genres} from "../../Genres/Genres";


const MenuList = () => {



    return (
        <div className={css.wrapperMenu}>
            <ul className={css.menuList}>
                <li className={css.menuItem}>
                    <Link to={'/'}>movies</Link>
                </li>
                <li className={cx(css.menuItem, css.twoItem)}>
                    genres
                    <div className={css.insideMenu}>
                        <div className={css.title}>Choose a genre</div>
                        <hr/>
                        <Genres/>
                    </div>
                </li>
                <SwitchTheme/>
            </ul>
        </div>
    );
};

export {MenuList};
