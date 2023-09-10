import React, { useEffect, useState } from "react";
import "./App.css";

// import serachlogo from "../src/search.svg";
import SearchIcon from '@mui/icons-material/Search';

import MovieCard from "./MovieCard";



const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=33280380";

const movie1 = {
  Title: "Spiderman",
  Year: "1990",
  imdbID: "tt0100669",
  Type: "movie",
  Poster: "N/A",
};

function App() {

const [movies , setMovies ] = useState([]);
const [searchTerm , setSearchTerm ] = useState('');



  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    SearchMovies("spiderman");
  }, []);

  return (
    <div className="App">
      <h1> MovieLand</h1>
      <div className="search">
        <input
          type="text"
          value={searchTerm.toUpperCase()}
          placeholder="Search  For Movies"
          onChange={(e)=>setSearchTerm(e.target.value)}
        
        />
          <SearchIcon
          onClick={()=> SearchMovies(searchTerm)} /> 
      
      </div>

     { movies?.length > 0 ? 

      (
        <div className="container">
        {movies.map((movie)=> 
          (
            <MovieCard movie={movie} />
          ))

        }
      </div>
      ) :  (
        <div className="empty">
        <h2>No Movie Found</h2>
        </div>
      )

     }

    </div>
  );
}

export default App;
