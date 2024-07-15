import React from 'react';
import Button from './Button';

type ListHeaderProps = {
  label: string;
  isLoading?: boolean;
  onClick: () => void;
};

export default function ListHeader({ label, isLoading, onClick }: ListHeaderProps) {
  return (
    <div className='flex flex-row justify-between m-3'>
      <h2 className='m-2 text-xl'>{label} List</h2>
      <Button className='bg-blue-500 p-2 text-white hover:bg-blue-700' loading={isLoading} onClick={onClick}>
        Add {label}
      </Button>
    </div>
  );
}
