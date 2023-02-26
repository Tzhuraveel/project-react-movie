import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,

};


const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

const {reducer: themeReducer, actions:{setMode}} = themeSlice

const themeActions = {
    setMode
}

export {
    themeReducer,
    themeActions
}