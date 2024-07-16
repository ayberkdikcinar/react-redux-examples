import React from 'react';
import ExpandableCard from './ExpandableCard';
import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import { FaTrash } from 'react-icons/fa';
import { album } from '../types/album';
import PhotosList from './PhotosList';
type AlbumItemProps = {
  albumItem: album;
};

export default function PhotoItem({ albumItem }: AlbumItemProps) {
  const [removeAlbum, removeAlbumResult] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(albumItem);
  };

  const header = (
    <>
      <Button className='bg-red-500 text-white border-2 px-3 py-2 mr-2' onClick={handleRemoveAlbum}>
        <FaTrash />
      </Button>
      <h4 className='text-black'>{albumItem.name}</h4>
    </>
  );

  return (
    <ExpandableCard header={header}>
      <PhotosList album={albumItem} key={albumItem.id} />
    </ExpandableCard>
  );
}
