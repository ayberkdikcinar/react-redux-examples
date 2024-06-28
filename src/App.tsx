import './App.css';
import SongPlaylist from './components/SongPlayList';
import MoviePlaylist from './components/MoviePlayList';
import { useDispatch } from 'react-redux';
import { resetAllData } from './store';
function App() {
  const dispatch = useDispatch();
  console.log('rerender on app...');

  const handleResetClick = () => {
    dispatch(resetAllData());
  };

  return (
    <div className='App'>
      <div className='container is-fluid'>
        <button
          onClick={() => handleResetClick()}
          className='bg-red-500 py-2 px-4 text-white border-2 border-grey hover:bg-red-700'
        >
          Reset Both Playlists
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>
    </div>
  );
}

export default App;
