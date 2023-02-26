import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesRequest} from "../../api";

const initialState = {
    searchedMovie: [],
    nameOfMovie: null,
    page: null,
    loading: null,
};

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        getNameOfMovie: (state, action) => {
            state.nameOfMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getSearchedMovie.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload
                state.loading = false
                state.searchedMovie = results
                state.page = total_pages
            })
            .addCase(getSearchedMovie.rejected, (state) => {
                state.loading = false
            })
            .addCase(getSearchedMovie.pending, (state) => {
                state.loading = true
            })
});

const getSearchedMovie = createAsyncThunk(
    'movieSlice/getSearchedMovie',
    async ({name, page}, thunkAPI) => {
        try {
            let {data} = await moviesRequest.getSearchedMovie({name, page});
            return data
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const {reducer: searchReducer, actions: {getNameOfMovie}} = searchSlice;

const searchAction = {
    getSearchedMovie,
    getNameOfMovie
}

export {
    searchAction,
    searchReducer
}