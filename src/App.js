import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
          //debugger //breakpoint
          setMovies(response.data)
          //console.log(setMovies)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    
    /** * [ ] Wrap the `App` component with `BrowserRouter` in `src/index.js`.
    * [ ] Inside your App file add two routes.
    * [ ] one route for `/` that loads the `MovieList` component. 
    * This component will need the movies injected into it via props.
    * [ ] one route that will take an `id` parameter after`/movies/` (EG: `/movies/2`, `/movies/3` where the id is dynamic). 
    * This route should load the `Movie` component.*/
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
    <Routes>
      <Route path="/" element={<MovieList movies={movies} />} />
      <Route path="movies/:id" element={<Movie />} />
    </Routes>
    </div>
  );
}
