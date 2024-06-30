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
  reducers: {
    addPhoto(state, action) {},
    removePhoto(state, action) {
      const photoIndex = state.data.findIndex((photo) => photo.id === action.payload);
      state.data.splice(photoIndex, 1);
    },
  },
});

export const { addPhoto, removePhoto } = photosSlice.actions;
export const photosReducer = photosSlice.reducer;
