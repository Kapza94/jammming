const SearchBar = () => {
  return (
    <div className="flex justify-center items-center flex-col p-5 bg-black">
      <h3 className="p-2 m-1 text-3xl text-white font-bold">SEARCH</h3>
      <input type="text" className="p-2 m-1 rounded-lg" />
      <button className="bg-violet-500 font-bold rounded-3xl pl-6 pr-6 pt-1 pb-1 mt-3">
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
