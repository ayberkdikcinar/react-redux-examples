import React from 'react';
import { photo } from '../types/photo';
import ExpandableCard from './ExpandableCard';
import { useRemovePhotoMutation } from '../store';
import Button from './Button';
import { FaTrash } from 'react-icons/fa';
type PhotoItemProps = {
  photoItem: photo;
};

export default function PhotoItem({ photoItem }: PhotoItemProps) {
  const [removePhoto, removePhotoResult] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photoItem);
  };

  return (
    <div className='relative m-2 cursor-pointer' onClick={handleRemovePhoto}>
      <img className='h-20 w-20' src={`${photoItem.imageUrl}`} alt={photoItem.imageUrl} width={100} height={100} />
      <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'>
        <FaTrash className='text-3xl' />
      </div>
    </div>
  );
}
