import { useState } from "react";
import { songs } from "../TrackList/TrackList";

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickSearch = (event) => {
    event.preventDefault();

    const filtered = songs.filter((song) => {
      return song.name.toLowerCase().includes(inputValue.toLocaleLowerCase());
    });

    // eslint-disable-next-line react/prop-types
    props.handleResults(filtered);
  };

  return (
    <form className="flex justify-center items-center flex-col p-5 bg-black" action="submit">
      <h3 className="p-2 m-1 text-3xl text-white font-bold">SEARCH</h3>

      <input onChange={handleInputChange} type="text" className="p-2 m-1 rounded-lg" />

      <button
        type="submit"
        onClick={handleClickSearch}
        className="bg-violet-500 font-bold rounded-3xl pl-6 pr-6 pt-1 pb-1 mt-3"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
