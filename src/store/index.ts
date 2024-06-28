import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/movieSlice';
import { resetAllData } from './actions';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movie: moviesReducer,
  },
});

export { store, resetAllData, addMovie, removeMovie, addSong, removeSong };

export type RootState = ReturnType<typeof store.getState>;
