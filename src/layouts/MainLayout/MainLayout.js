import {Outlet} from "react-router-dom";


import css from './MainLayout.module.css';
import './normalize.css'
import {Header} from "../../components";
import {useSelector} from "react-redux";
import {SavedMovie} from "../../components/SavedMovie/SavedMovie";


const MainLayout = () => {

    let {modal} = useSelector(state => state.modal);

    return (
        <div className={css.containerWebSite} >
            <Header/>
            <div className={css.blockLimit}>
                <Outlet/>
            </div>
            {modal && <SavedMovie modal={modal}/>}
        </div>
    );
};

export {MainLayout};