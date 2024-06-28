import React from 'react';
import { RootState, changeSearch } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.cars.searchText);

  function handleSearchChange(val: string) {
    dispatch(changeSearch(val));
  }
  return (
    <div className='px-2'>
      <label htmlFor=''>Search</label>
      <input
        type='text'
        className='px-2 border-2'
        value={searchText || ''}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
}
