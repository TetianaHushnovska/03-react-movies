import axios from "axios";
import type { Movie } from "../types/movie";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
});

interface TMDBResponce {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}

export default async function fetchMovies(query: string): Promise<Movie[]> {
    const response = await api.get<TMDBResponce>("/search/movie", {
        params: {
            query,
            include_adult: false,
            language: "en-US",
            page: 1,
        },
    });

    return response.data.results;
}
