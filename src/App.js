import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
import Navbar from "./Navbar";
import LayoutGrid from "./LayoutGrid";
import DisplayMovie from "./DisplayMovie";

function App() {
  // GET movies/:id - returns details of a specific movie
  // GET movies?search=<query> - returns a list of movies filtered on titles matching the given query
  // GET reviews/:movieId - returns all reviews for a given movie
  // POST reviews - creates a new review, returns success status in JSON response
  // POST register - creates a new user, returns success status in JSON response
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDatabase();
  }, []);

  async function getDatabase(){
    const data = await axios.get("http://localhost:3001/movies")
    setMovies(data.data)
  }

  return (
    <>
      <Navbar setSearch = {setSearch}/>
      {current === null ? <LayoutGrid movies = {movies} setCurrent={setCurrent} current={current} /> :
          <DisplayMovie current={current} setCurrent = {setCurrent}/>}
    </>
  );
}

export default App;
