import { Link } from "react-router-dom";

const MovieCard = ({ movie, handleChangeStatus, handleDeleteMovie }) => {
  return (
    <div className='p-4'>
      <button className='bg-blue-500 text-white px-4 py-1 rounded mb-4'>
        <Link to='/'>Back</Link>
      </button>
      <h1 className='text-3xl text-white font-bold text-center mb-4'>
        Movie Details
      </h1>

      <div className='flex flex-col items-center bg-white shadow-md rounded-lg p-4 md:w-md'>
        <img
          src={
            movie?.posterUrl ||
            "https://signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"
          }
          alt={movie?.title}
          className='w-full h-48 object-cover rounded-lg mb-2'
        />
        <h2 className='text-lg font-semibold'>{movie?.title}</h2>
        <p className='text-gray-600'>{movie?.director}</p>
        <p className='text-gray-500'>{movie?.releaseYear}</p>
        <p className='text-gray-500'>{movie?.genre}</p>

        <div className='flex flex-col gap-2  items-center mt-2'>
          {movie?.watched ? (
            <button
              className='mt-2 bg-red-500 text-white px-4 py-2 rounded'
              onClick={() => handleChangeStatus(movie._id, false)}
            >
              Mark as Unwatched
            </button>
          ) : (
            <button
              className='mt-2 bg-green-500 text-white px-4 py-2 rounded'
              onClick={() => handleChangeStatus(movie._id, true)}
            >
              Mark as Watched
            </button>
          )}

          <Link
            to={`/edit-movie/${movie._id}`}
            className='bg-yellow-500 text-white text-center w-full px-4 py-1 rounded'
          >
            Edit
          </Link>
          <button
            className='bg-red-500 text-white px-4 w-full py-1 rounded'
            onClick={() => handleDeleteMovie(movie._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
