import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchCharacters } from '../store/thunks/fetchCharacters';
import Skeleton from './Skeleton';

export default function CharactersList() {
  const characters = useSelector((state: RootState) => state.characters);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  function render() {
    if (characters.isLoading) {
      return (
        <div>
          <Skeleton times={6} />
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
            return <p>{character.name}</p>;
          })}
        </div>
      );
    }

    return null;
  }
  return (
    <div>
      <h4>Characters List</h4>
      {render()}
    </div>
  );
}
