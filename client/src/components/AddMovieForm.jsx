import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddMovieForm = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [watched, setWatched] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://movie-watchlist-gzt3.onrender.com/movies",
        {
          title,
          director,
          genre,
          releaseYear,
          posterUrl,
          watched,
        }
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
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-6 rounded-lg shadow-md w-full md:w-md'
    >
      <h2 className='text-2xl font-bold mb-4'>Add a New Movie</h2>
      <div className='mb-4'>
        <label className='block text-gray-700'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className='border rounded w-full py-2 px-3'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Director</label>
        <input
          type='text'
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className='border rounded w-full py-2 px-3'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Genre</label>
        <input
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className='border rounded w-full py-2 px-3'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Release Year</label>
        <input
          type='number'
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
          className='border rounded w-full py-2 px-3'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Poster URL</label>
        <input
          type='text'
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
          className='border rounded w-full py-2 px-3'
        />
      </div>

      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
