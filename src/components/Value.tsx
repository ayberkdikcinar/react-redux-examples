import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Value() {
  const totalCost = useSelector((state: RootState) => {
    return state.cars.cars
      .filter((car) => car.name.toLowerCase().includes(state.cars.searchText.toLowerCase()))
      .reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className='px-2 mt-5'>Total Cost: ${totalCost}</div>;
}
