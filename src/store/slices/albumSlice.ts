import { createSlice, nanoid } from '@reduxjs/toolkit';
import { album } from '../../types/album';

const initialState = [] as album[];

const albumsSlice = createSlice({
  name: 'albums',
  initialState: initialState,
  reducers: {
    addAlbum(state, action) {
      const newAlbum = action.payload as album;

      /*       state.push({title:action.payload,id:nanoid(),userId:'1'});
       */
    },
    removeAlbum(state, action) {
      const id = action.payload;
      const albumIndex = state.findIndex((album) => album.id === id);
      state.splice(albumIndex, 1);
    },
  },
});

export const { addAlbum, removeAlbum } = albumsSlice.actions;
export const albumsReducer = albumsSlice.reducer;
