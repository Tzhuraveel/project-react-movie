import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesRequest} from "../../api";

const initialState = {
    topRatedMovie: null,
    movies: [],
    page: null,
    movie: {},
    loading: false,
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload
                state.loading = false
                state.page = total_pages
                state.movies = results
            })
            .addCase(getAllMovies.rejected, (state) => {
                state.loading = false
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                state.loading = false
                state.topRatedMovie = action.payload
            })
            .addCase(getTopRatedMovies.rejected, (state) => {
                state.loading = false
            })
            .addCase(getTopRatedMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getElementById.fulfilled, (state, action) => {
                state.loading = false
                state.movie = action.payload
            })
            .addCase(getElementById.rejected, (state) => {
                state.loading = false
            })
            .addCase(getElementById.pending, (state) => {
                state.loading = true
            })
});

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}, thunkAPI) => {
        try {
            let {data} = await moviesRequest.getAllMovies(page);
            return data
        }catch (e){
            console.log(e)
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getTopRatedMovies = createAsyncThunk(
    'movieSlice/getTopRatedMovies',
    async (_, thunkAPI) => {
        try {
            let {data} = await moviesRequest.getTopRatedMovies();
            return [...data.results]
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getElementById = createAsyncThunk(
    'movieSlice/getElementById',
    async ({id}, thunkAPI) => {
        try {
            let {data} = await moviesRequest.getMovieById(id);
            return data
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);





const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAllMovies,
    getTopRatedMovies,
    getElementById,

}

export {
    movieReducer,
    movieActions,
}