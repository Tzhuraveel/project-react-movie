import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../../redux";
import './switchTheme.css';


const SwitchTheme = () => {


    const dispatch = useDispatch();

    let {darkMode} = useSelector(state => state.theme);

    const setTheme = () => {
        dispatch(themeActions.setMode(!darkMode))
    }



    return (
        <div onClick={setTheme}>
            <input type="checkbox"/>
        </div>
    );
};

export {SwitchTheme};