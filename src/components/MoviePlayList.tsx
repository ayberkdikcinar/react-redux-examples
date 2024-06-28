import { createRandomMovie } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie, RootState } from '../store';
function MoviePlaylist() {
  // To Do:
  // Get list of movies
  const dispatch = useDispatch();

  const moviePlaylist: string[] = useSelector((state: RootState) => state.movie);

  const handleMovieAdd = (movie: string) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie: string) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className='bg-red-700 text-white border-2 border-white px-2 hover:bg-red-500'
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='text-black-500 font-bold m-2'>Movie Playlist</h3>
        <div className='buttons'>
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className='bg-blue-500 text-white py-2 px-4 font-bold rounded mb-5 hover:bg-blue-700'
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
