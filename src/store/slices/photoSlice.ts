import { createSlice, nanoid } from '@reduxjs/toolkit';
import { photo } from '../../types/photo';

const initialState = {
  data: [] as photo[],
  isLoading: false,
  error: null,
};

const photosSlice = createSlice({
  name: 'photos',
  initialState: initialState,
  reducers: {},
});

export const photosReducer = photosSlice.reducer;
