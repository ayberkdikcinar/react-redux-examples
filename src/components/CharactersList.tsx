import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, addCharacter } from '../store';
import { fetchCharacters } from '../store';
import Skeleton from './Skeleton';
import ExpandableCard from './ExpandableCard';

export default function CharactersList() {
  const characters = useSelector((state: RootState) => state.characters);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const handleCharacterAdd = () => {
    dispatch(addCharacter());
  };

  function render() {
    if (characters.isLoading) {
      return (
        <div>
          <Skeleton times={6} className='h-10 w-full' />
        </div>
      );
    }

    if (characters.error) {
      return <div>Error: {characters.error.message}</div>;
    }
    if (characters.data) {
      return (
        <div>
          <div className='flex flex-row justify-between m-3'>
            <h2 className='m-2 text-xl'>Characters List</h2>
            <button className='bg-blue-500 p-2 text-white hover:bg-blue-700' onClick={handleCharacterAdd}>
              Add Character
            </button>
          </div>
          <div>
            {characters.data.map((character) => {
              return <ExpandableCard id={character.id} text={character.name} />;
            })}
          </div>
        </div>
      );
    }

    return null;
  }
  return <div>{render()}</div>;
}
