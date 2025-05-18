import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const MovieDetails = () => {
  const movieId = useParams().movieId;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://movie-watchlist-gzt3.onrender.com/movies/${movieId}`
        );
        if (response.status === 200) {
          setMovie(response.data.movie);
        } else {
          toast.error("Failed to fetch movie details.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleChangeStatus = async (id, watched) => {
    try {
      const response = await axios.put(
        `https://movie-watchlist-gzt3.onrender.com/movies/${id}`,
        {
          watched,
        }
      );
      if (response.status === 200) {
        setMovie((prevMovie) => ({ ...prevMovie, watched }));
        toast.success("Movie status updated successfully.");
      } else {
        toast.error("Failed to update movie status.");
      }
    } catch (error) {
      console.error("Error updating movie status:", error);
      toast.error("Failed to update movie status.");
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      const response = await axios.delete(
        `https://movie-watchlist-gzt3.onrender.com/movies/${id}`
      );
      if (response.status === 200) {
        toast.success("Movie deleted successfully.");
        window.location.href = "/";
      } else {
        toast.error("Failed to delete movie.");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
      toast.error("Failed to delete movie.");
    }
  };

  if (!movie) {
    return (
      <div className='flex items-center justify-center h-screen w-full'>
        <p className='text-white'>Loading...</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center h-screen w-full p-4 md:p-6 bg-gradient-to-r from-violet-500 to-purple-500'>
      <MovieCard
        movie={movie}
        handleChangeStatus={handleChangeStatus}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
};

export default MovieDetails;
