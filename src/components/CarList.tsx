import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, removeCar } from '../store';

export default function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector((state: RootState) => {
    return {
      cars: state.cars.cars.filter((car) => car.name.toLowerCase().includes(state.cars.searchText.toLowerCase())),
      name: state.carForm.name,
    };
  });

  function handleRemoveCar(id: string) {
    dispatch(removeCar(id));
  }

  function isTextBold(carName: string, filter: string): boolean {
    return carName.toLowerCase().includes(filter.toLowerCase()) && filter.length > 0;
  }

  return (
    <div className='bg-gray-200 max-w-fit p-2'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => {
            const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

            return (
              <tr key={car.id} className={`text-center ${bold && 'font-bold'}`}>
                <td className='px-2'>{car.name}</td>
                <td className='px-2'>${car.cost}</td>
                <td>
                  <button className='bg-red-500 px-2 py-2 border-2 text-white' onClick={() => handleRemoveCar(car.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
