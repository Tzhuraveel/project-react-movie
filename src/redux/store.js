import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, searchReducer, themeReducer} from "./slices";
import {modalReducer} from "./slices/modalSlice";

const rootReducer = combineReducers({
    movie: movieReducer,
    theme: themeReducer,
    search: searchReducer,
    genre: genreReducer,
    modal: modalReducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}