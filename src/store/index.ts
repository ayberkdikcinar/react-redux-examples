import { configureStore } from '@reduxjs/toolkit';
import { addAlbum, removeAlbum, albumsReducer } from './slices/albumSlice';
import { addPhoto, removePhoto, photosReducer } from './slices/photoSlice';
import { charactersReducer } from './slices/characterSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    albums: albumsReducer,
    photos: photosReducer,
  },
});

export { store, addAlbum, removeAlbum, addPhoto, removePhoto };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
