import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, addCharacter } from '../store';
import { fetchCharacters } from '../store';
import Skeleton from './Skeleton';
import ListHeader from './ListHeader';
import CharacterItem from './CharacterItem';

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
      return characters.data.map((character) => {
        return <CharacterItem characterItem={character} key={character.id}></CharacterItem>;
      });
    }

    return null;
  }
  return (
    <div>
      <ListHeader label='Character' onClick={handleCharacterAdd} />
      <div>{render()}</div>
    </div>
  );
}
