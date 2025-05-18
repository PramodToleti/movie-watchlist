const SearchInput = ({ value, onChange }) => (
  <input
    type='text'
    placeholder='Search movies...'
    value={value}
    onChange={onChange}
    className='border rounded px-3 py-2 w-full md:w-80 mb-4 mt-6 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-300 transition duration-200 ease-in-out'
  />
);

export default SearchInput;
