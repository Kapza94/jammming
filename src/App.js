import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav.js";
import Searchbar from "./components/Searchbar.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Searchbar />
    </div>
  );
}

export default App;
