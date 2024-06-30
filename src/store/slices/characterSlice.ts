import { SerializedError, createSlice, nanoid } from '@reduxjs/toolkit';
import { character } from '../../types/character';
import { fetchCharacters } from '../thunks/fetchCharacters';

const initialState = {
  data: [] as character[],
  isLoading: false,
  error: null as SerializedError | null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const charactersReducer = charactersSlice.reducer;
