import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditMovieForm = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    posterUrl: "",
    watched: false,
  });

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
      } catch (error) {
        console.error("Error fetching movie details:", error);
        toast.error("Error fetching movie details.");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://movie-watchlist-gzt3.onrender.com/movies/${movieId}`,
        movie
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

  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow-md'>
      <h2 className='text-2xl mb-4'>Edit Movie</h2>
      <div>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={movie.title}
          onChange={handleChange}
          required
          className='border p-2 w-full mb-4'
        />
      </div>
      <div>
        <label>Director:</label>
        <input
          type='text'
          name='director'
          value={movie.director}
          onChange={handleChange}
          className='border p-2 w-full mb-4'
        />
      </div>
      <div>
        <label>Genre:</label>
        <input
          type='text'
          name='genre'
          value={movie.genre}
          onChange={handleChange}
          className='border p-2 w-full mb-4'
        />
      </div>
      <div>
        <label>Release Year:</label>
        <input
          type='number'
          name='releaseYear'
          value={movie.releaseYear}
          onChange={handleChange}
          required
          className='border p-2 w-full mb-4'
        />
      </div>
      <div>
        <label>Poster URL:</label>
        <input
          type='text'
          name='posterUrl'
          value={movie.posterUrl}
          onChange={handleChange}
          className='border p-2 w-full mb-4'
        />
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='watched'
            checked={movie.watched}
            onChange={handleChange}
            style={{ marginRight: "8px" }}
          />
          Watched
        </label>
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 mt-2 rounded'
      >
        Update Movie
      </button>
    </form>
  );
};

export default EditMovieForm;
