import React from 'react';

type ListHeaderProps = {
  label: string;
  onClick: () => void;
};

export default function ListHeader({ label, onClick }: ListHeaderProps) {
  return (
    <div className='flex flex-row justify-between m-3'>
      <h2 className='m-2 text-xl'>{label} List</h2>
      <button className='bg-blue-500 p-2 text-white hover:bg-blue-700' onClick={onClick}>
        Add {label}
      </button>
    </div>
  );
}
