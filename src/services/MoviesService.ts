import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Movies } from "../types/Movies";
import axios from "axios";
import { axiosInstance } from "../apis/MoviesURL";

export const fetchTop100MoviesList = createAsyncThunk<Movies[], void, { rejectValue: string }>(
    "feature/top100MoviesList",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get<Movies[]>("");
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(
                    error.response?.data?.message || "Failed to fetch movies"
                );
            }
            return rejectWithValue("Unexpected error occurred");
        }
    }
)