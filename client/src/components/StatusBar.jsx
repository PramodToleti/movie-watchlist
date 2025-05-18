export const StatusBar = ({ status, setStatus }) => {
  return (
    <div className='flex items-center'>
      <button
        type='button'
        className={`
            border-1 border-gray-400 p-2 px-3 h-10 rounded-tl-md rounded-bl-md ${
              status === "" ? "bg-blue-500 text-white" : "bg-white"
            }`}
        onClick={() => setStatus("")}
      >
        All
      </button>
      <button
        type='button'
        className={`
        border-1 p-2 border-gray-400  px-3 h-10 ${
          status === "watched" ? "bg-blue-500 text-white px-4" : "bg-white"
        }`}
        onClick={() => setStatus("watched")}
      >
        Watched
      </button>
      <button
        type='button'
        className={`
        border-1 border-gray-400  p-2 px-3 h-10 rounded-tr-md rounded-br-md ${
          status === "unwatched" ? "bg-blue-500 text-white" : "bg-white"
        }`}
        onClick={() => setStatus("unwatched")}
      >
        Unwatched
      </button>
    </div>
  );
};
