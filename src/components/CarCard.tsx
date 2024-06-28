import React from 'react';
import { Car } from '../store/slices/carSlice';

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className='container mx-auto flex justify-between bg-red-500'>
      <div className='px-2'>{car.name}</div>
      <div className='px-2'>{car.cost}</div>
      <div className='px-2'>
        <button>Remove</button>
      </div>
    </div>
  );
}
