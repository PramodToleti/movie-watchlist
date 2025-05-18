import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AddMovieForm from "../components/AddMovieForm";

const AddMovie = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddMovie = async (movieData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://movie-watchlist-gzt3.onrender.com/movies",
        movieData
      );
      if (response.status === 201) {
        toast.success("Movie added successfully!");
        navigate("/");
      } else {
        toast.error("Failed to add movie.");
      }
    } catch (error) {
      console.error("Error adding movie:", error);
      toast.error("Failed to add movie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center h-screen w-full p-4 md:p-6 bg-gradient-to-r from-violet-500 to-purple-500'>
      <h1 className='text-3xl text-white font-bold text-center mb-4'>
        Add a New Movie
      </h1>
      <AddMovieForm onSubmit={handleAddMovie} loading={loading} />
    </div>
  );
};

export default AddMovie;
