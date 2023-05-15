import { useState, useEffect } from 'react'
import "./App.css"
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_KEY = "445caee3";
      const response = await fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`)
      const data = await response.json();
      console.log(data)
      setMovies(data.Search)     
    }
    if(searchQuery) {
      fetchMovie()
    }
    
  }, [searchQuery])
   //console.log(movies)
  return (
    <>
      <SearchBar onSearch={setSearchQuery}/> 
      <MovieList movies={movies}/>
    </>
  )
}

export default App