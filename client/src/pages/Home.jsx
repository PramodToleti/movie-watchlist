import { useState } from "react";
import { StatusBar } from "../components/StatusBar";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import MoviesList from "../components/MoviesList";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [status, setStatus] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://movie-watchlist-gzt3.onrender.com/movies?status=${status}`
        );
        if (response.status === 200) {
          setMovies(response.data.movies);
        } else {
          toast.error("Failed to fetch movies.");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [status]);

  const filteredMovies = movies.filter((movie) => {
    const q = search.toLowerCase();
    return (
      movie.title.toLowerCase().includes(q) ||
      (movie.director && movie.director.toLowerCase().includes(q)) ||
      (movie.genre && movie.genre.toLowerCase().includes(q))
    );
  });

  return (
    <div className='flex flex-col items-center min-h-screen w-full p-4 md:p-6 bg-gradient-to-r from-violet-500 to-purple-500'>
      <div className='min-h-96 w-full flex-col h-full items-center justify-items-center'>
        <h1 className='text-3xl text-white font-bold text-center mb-4'>
          Welcome to Movie Tracker
        </h1>
        <StatusBar status={status} setStatus={setStatus} />
        <div className='flex justify-center w-full'>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <MoviesList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default Home;
