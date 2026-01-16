// api/axios.ts
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "c0b866eb40mshc722a20f6e76ce8p1cabb0jsncd5da3809a93",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
});
