const SearchInput = ({ value, onChange }) => (
  <input
    type='text'
    placeholder='Search movies...'
    value={value}
    onChange={onChange}
    className='border rounded px-3 py-2 w-full md:w-80 mb-4'
  />
);

export default SearchInput;
