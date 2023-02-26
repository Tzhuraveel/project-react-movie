import css from './Header.module.css'
import {MenuList, MenuLogo, Search, UserInfo} from "../Menu";


const Header = () => {


    return (
        <div className={css.containerMenu}>
            <div className={css.fixedMenu}>
                <div className={css.blockLimiter}>
                    <MenuLogo/>
                    <Search/>
                    <div className={css.blockMenu}>
                        <MenuList/>
                        <UserInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};