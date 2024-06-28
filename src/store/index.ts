import { configureStore } from '@reduxjs/toolkit';
import { addCar, removeCar, carsReducer, changeSearch } from './slices/carSlice';
import { carFormReducer, changeCost, changeName } from './slices/carFormSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    carForm: carFormReducer,
  },
});

export { store, addCar, removeCar, changeCost, changeName, changeSearch };

export type RootState = ReturnType<typeof store.getState>;
