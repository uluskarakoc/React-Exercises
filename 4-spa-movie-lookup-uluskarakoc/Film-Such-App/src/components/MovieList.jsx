import React from 'react'

function MovieList({movies}) {
  // console.log(movies)
  return (
    <>
      <ul>
        {movies.map((movie, index) => (
          <li key={index+1}>{movie.Title}</li>
        ))}
      </ul>
    </>
  )
}

export default MovieList