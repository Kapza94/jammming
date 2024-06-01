import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav.js";
import Searchbar from "./components/Searchbar.js";
import "./App.css";
import Tracklist from "./components/Tracklist.js";
import Playlist from "./components/Playlist.js";

function App() {
  return (
    <div className="h-100">
      <div className="Top-container">
        <Nav />
        <Searchbar />
        <div className=" Mid-container d-flex justify-content-around">
          <Tracklist />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
