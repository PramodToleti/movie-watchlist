import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <p className='text-center text-white h-64 flex items-center justify-items-center'>
        No movies found.
      </p>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
      {movies.map((movie) => (
        <Link
          to={`/movies/${movie._id}`}
          key={movie._id}
          className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center'
        >
          <img
            src={
              movie.posterUrl ||
              "https://signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"
            }
            alt={movie.title}
            className='w-full h-48 object-cover rounded-lg mb-2'
          />
          <h2 className='text-lg font-semibold'>{movie.title}</h2>
          <p className='text-gray-600'>{movie.director}</p>
          <p className='text-gray-500'>{movie.releaseYear}</p>
          <p className='text-gray-500'>{movie.genre}</p>

          {movie.watched ? (
            <button
              className='mt-2 bg-red-500 text-white px-4 py-2 rounded'
              onClick={() => console.log("Mark as Unwatched")}
            >
              Mark as Unwatched
            </button>
          ) : (
            <button
              className='mt-2 bg-green-500 text-white px-4 py-2 rounded'
              onClick={() => console.log("Mark as Watched")}
            >
              Mark as Watched
            </button>
          )}
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
