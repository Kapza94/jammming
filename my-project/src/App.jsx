import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";
import Tracklist from "./Components/TrackList/Tracklist";
import Playlist from "./Components/Playlist/Playlist";
import { useState } from "react";

const App = () => {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSetSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleSelectedTracks = (track) => {
    setSelectedTracks([...selectedTracks, track]);
  };

  console.log(selectedTracks);

  const handleSelectedTracksRemoval = (track) => {
    setSelectedTracks(selectedTracks.filter((selectedTrack) => selectedTrack !== track));
    console.log(track);
  };

  return (
    <>
      <NavBar />
      <SearchBar handleResults={handleSetSearchResults} />
      <div className="flex justify-between m-6">
        <SearchResults results={searchResults} handleSelectedTracks={handleSelectedTracks} />
        <Tracklist
          selectedTracks={selectedTracks}
          handleSelectedTracksRemoval={handleSelectedTracksRemoval}
        />
      </div>
      <Playlist selectedTracks={selectedTracks} />
    </>
  );
};

export default App;
