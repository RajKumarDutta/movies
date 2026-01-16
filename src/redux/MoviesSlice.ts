import { createSlice } from "@reduxjs/toolkit";
import { fetchTop100MoviesList } from "../services/MoviesService";
import type { Movies } from "../types/Movies";

type MoviesState = {
  data: Movies[];
  loading: boolean;
  error: string | null;
};

const initialState: MoviesState = {
  data: [],
  loading: false,
  error: null,
};

const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTop100MoviesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTop100MoviesList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTop100MoviesList.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Failed to load movies";
      });
  },
});

export default MoviesSlice.reducer;
