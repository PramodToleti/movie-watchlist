import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className='bg-violet-800 p-4 flex justify-between items-center'>
    <Link to='/' className='text-white text-xl font-bold'>
      Movie Watchlist
    </Link>
    <div>
      <Link to='/' className='text-white px-4 py-2 rounded hover:bg-gray-700'>
        Home
      </Link>
      <Link
        to='/add-movie'
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Add Movie
      </Link>
    </div>
  </nav>
);

export default Navbar;
