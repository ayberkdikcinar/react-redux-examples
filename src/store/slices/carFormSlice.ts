import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carSlice';

const initFormState = {
  name: '',
  cost: 0,
};

const carFormSlice = createSlice({
  name: 'carForm',
  initialState: initFormState,

  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.cost = 0;
      state.name = '';
    });
  },
});

export const carFormReducer = carFormSlice.reducer;
export const { changeCost, changeName } = carFormSlice.actions;
