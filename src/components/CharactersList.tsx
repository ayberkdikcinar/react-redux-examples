import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, addCharacter } from '../store';
import { fetchCharacters } from '../store';
import Skeleton from './Skeleton';
import ExpandableCard from './ExpandableCard';
import AlbumsList from './AlbumsList';
import ListHeader from './ListHeader';

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
          {characters.data.map((character) => {
            return (
              <ExpandableCard item={character} key={character.id}>
                <AlbumsList character={character}></AlbumsList>
              </ExpandableCard>
            );
          })}
        </div>
      );
    }

    return null;
  }
  return (
    <div>
      <ListHeader label='Character' onClick={() => console.log('onn..')} />
      <div>{render()}</div>
    </div>
  );
}
