import { configureStore } from '@reduxjs/toolkit';
import { albumsReducer } from './slices/albumSlice';
import { charactersReducer } from './slices/characterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { photosApi } from './apis/photosApi';
const store = configureStore({
  reducer: {
    characters: charactersReducer,
    albums: albumsReducer,
    //photos: photosReducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefauiltMiddleware) => getDefauiltMiddleware().concat(photosApi.middleware),
});

setupListeners(store.dispatch);

export { store };

export * from './thunks/fetchCharacters';
export * from './thunks/addCharacter';
export * from './thunks/fetchAlbums';
export * from './apis/photosApi';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
