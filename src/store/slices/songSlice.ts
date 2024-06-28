import { createSlice } from '@reduxjs/toolkit';
import { resetAllData } from '../actions';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state: string[], action) {
      state.push(action.payload);
    },
    removeSong(state: string[], action) {
      const index = state.findIndex((item) => item === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetAllData, (state) => {
      state.length = 0;
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
