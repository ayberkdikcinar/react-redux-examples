import { createSlice, nanoid, SerializedError } from '@reduxjs/toolkit';
import { album } from '../../types/album';
import { fetchAlbums } from '../thunks/fetchAlbums';
import { addAlbum } from '../thunks/addAlbums';

const initialState = {
  data: [] as album[],
  isLoading: false,
  error: null as SerializedError | null,
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAlbums.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addAlbum.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
      state.error = null;
    });
    builder.addCase(addAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const albumsReducer = albumsSlice.reducer;
