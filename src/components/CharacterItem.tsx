import React from 'react';
import ExpandableCard from './ExpandableCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, addCharacter } from '../store';
import Button from './Button';
import { FaTrash } from 'react-icons/fa';
import { character } from '../types/character';
import PhotosList from './PhotosList';
import AlbumsList from './AlbumsList';
type CharacterItemProps = {
  characterItem: character;
};

export default function PhotoItem({ characterItem }: CharacterItemProps) {
  /* const handleRemoveCharacter = () => {
    removeCharacter(CharacterItem);
  }; */
  const header = (
    <>
      <Button className='bg-red-500 text-white border-2 px-3 py-2 mr-2'>
        <FaTrash />
      </Button>
      <h4 className='text-black'>{characterItem.name}</h4>
    </>
  );
  return (
    <ExpandableCard header={header}>
      <AlbumsList character={characterItem} key={characterItem.id} />
    </ExpandableCard>
  );
}
