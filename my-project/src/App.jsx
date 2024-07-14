import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSetSearchResults = (results) => {
    setSearchResults(results);
  };
  return (
    <>
      <NavBar />
      <SearchBar handleResults={handleSetSearchResults} />
      <SearchResults results={searchResults} />
    </>
  );
};

export default App;
