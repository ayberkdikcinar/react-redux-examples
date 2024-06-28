import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, RootState, addCar } from '../store';

export default function CarForm() {
  const dispatch = useDispatch();

  const { cost, name } = useSelector((state: RootState) => state.carForm);

  function handleInputChange(e: any) {
    const targetName = e.target.name;
    if (targetName === 'carName') {
      dispatch(changeName(e.target.value));
    }
    if (targetName === 'carCost') {
      dispatch(changeCost(Number(e.target.value)) || 0);
    }
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  }

  return (
    <div>
      <h4>Car Form</h4>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            className='border-2 border-solid border-gray-600 px-2 mr-2'
            type='text'
            onChange={handleInputChange}
            name='carName'
            value={name || ''}
            minLength={3}
            required
          />
          <input
            className='border-2 border-solid border-gray-600 px-2'
            type='number'
            onChange={handleInputChange}
            name='carCost'
            min={1}
            value={cost || ''}
            required
          />
          <button className='px-2 py-1 bg-blue-500 m-2' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
