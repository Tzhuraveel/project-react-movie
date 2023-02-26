import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesRequest} from "../../api";


const initialState = {
    genres: [],
    moviesByGenre: [],
    page: null,
    loading: null,
};

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.loading = false
                state.genres = action.payload
            })
            .addCase(getGenres.rejected, (state) => {
                state.loading = false
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovieByGenres.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload
                state.loading = false
                state.page = total_pages
                state.moviesByGenre = results
            })
            .addCase(getMovieByGenres.rejected, (state) => {
                state.loading = false
            })
            .addCase(getMovieByGenres.pending, (state) => {
                state.loading = true
            })
});

const getMovieByGenres = createAsyncThunk(
    'movieSlice/getMovieByGenres',
    async ({genre, page}, thunkAPI) => {
        try {
            let {data} = await moviesRequest.getMovieByGenres({genre: genre.genreId, page});
            return data
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, thunkAPI) => {
        try {
            let {data} = await moviesRequest.getGenresMovie();
            return [...data.genres]
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getGenres,
    getMovieByGenres
}

export {
    genreActions,
    genreReducer
}