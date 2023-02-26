import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";

import {HomePage, MovieInfoPage, MoviesByGenrePage, MoviesPage, SearchMoviePage} from "./pages";
import {MainLayout} from "./layouts/MainLayout/MainLayout";

const App = () => {


    const {darkMode} = useSelector(state=> state.theme);

    return (
        <div className={`app ${darkMode ? 'dark' : 'light'}`}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movie'}/>}/>

                    <Route path={'movie'} element={<HomePage/>}>
                        <Route index element={<MoviesPage/>}/>
                        <Route path={'search/:name'} element={<SearchMoviePage/>}/>
                        <Route path={'genres/:genreId'} element={<MoviesByGenrePage/>}/>
                    </Route>

                    <Route path={'/details/:id'} element={<MovieInfoPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};