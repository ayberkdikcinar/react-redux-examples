import { createRandomSong } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addSong, removeSong, RootState } from '../store';

function SongPlaylist() {
  // To Do:
  // Get list of songs
  console.log('page rerendered...');

  const dispatch = useDispatch();

  const songPlaylist: string[] = useSelector((state: RootState) => state.songs);

  const handleSongAdd = (song: string) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song: string) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className='text-black-500 font-bold m-2'>Song Playlist</h3>
        <div className='buttons'>
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5'
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
