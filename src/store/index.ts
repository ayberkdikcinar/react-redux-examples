import { configureStore } from '@reduxjs/toolkit';
import { albumsReducer } from './slices/albumSlice';
import { charactersReducer } from './slices/characterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { photosApi } from './apis/photosApi';
import { albumsApi } from './apis/albumsApi';
const store = configureStore({
  reducer: {
    characters: charactersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefauiltMiddleware) =>
    getDefauiltMiddleware().concat(photosApi.middleware).concat(albumsApi.middleware),
});

setupListeners(store.dispatch);

export { store };

export * from './thunks/fetchCharacters';
export * from './thunks/addCharacter';
export * from './thunks/fetchAlbums';
export * from './apis/photosApi';
export * from './apis/albumsApi';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
