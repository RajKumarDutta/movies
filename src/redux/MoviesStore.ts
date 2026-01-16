import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";

export const MoviesStore = configureStore({
    reducer: {
        movies: moviesReducer
    },
})

export type RootState = ReturnType<typeof MoviesStore.getState>;
export type AppDispatch = typeof MoviesStore.dispatch;