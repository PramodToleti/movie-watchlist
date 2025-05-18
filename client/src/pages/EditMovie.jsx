import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditMovieForm from "../components/EditMovieForm";
import axios from "axios";
import toast from "react-hot-toast";

const EditMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/movies/${movieId}`
        );
        if (response.status === 200) {
          setMovie(response.data.movie);
        } else {
          toast.error("Failed to fetch movie details.");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
        toast.error("Error fetching movie details.");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleUpdateMovie = async (updatedMovie) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/movies/${movieId}`,
        updatedMovie
      );
      if (response.status === 200) {
        toast.success("Movie updated successfully.");
        navigate("/");
      } else {
        toast.error("Failed to update movie.");
      }
    } catch (error) {
      console.error("Error updating movie:", error);
      toast.error("Failed to update movie.");
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
      <EditMovieForm movie={movie} onUpdateMovie={handleUpdateMovie} />
    </div>
  );
};

export default EditMovie;
