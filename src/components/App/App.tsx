import { useState } from "react";
import fetchMovies from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import type { Movie } from "../../types/movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const handleSearch = async (query: string) => {
    const res = await fetchMovies(query);
    setMovies(res);
    console.log(movies);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
}

export default App;
