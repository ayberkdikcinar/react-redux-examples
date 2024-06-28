import React from 'react';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import Search from './components/Search';
import Value from './components/Value';

export default function App() {
  return (
    <div className='container mx-auto'>
      <CarForm></CarForm>
      <Search></Search>
      <CarList></CarList>
      <Value></Value>
    </div>
  );
}
