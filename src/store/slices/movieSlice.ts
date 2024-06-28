import { createSlice } from '@reduxjs/toolkit';
import { resetAllData } from '../actions';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state: string[], action) {
      state.push(action.payload);
    },
    removeMovie(state: string[], action) {
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

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
