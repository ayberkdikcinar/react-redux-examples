import { createSlice, nanoid } from '@reduxjs/toolkit';
export type Car = {
  name: string;
  cost: number;
  id: string;
};

const initialState = {
  searchText: '',
  cars: [] as Car[],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    addCar(state, action) {
      const car = {
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      } as Car;

      state.cars.push(car);
    },
    removeCar(state, action) {
      const filteredCars = state.cars.filter((car) => car.id !== action.payload);
      state.cars = filteredCars;
    },
    changeSearch(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { addCar, removeCar, changeSearch } = carsSlice.actions;
