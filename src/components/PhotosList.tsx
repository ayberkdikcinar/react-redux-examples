import React from 'react';
import { album } from '../types/album';
import { photo } from '../types/photo';
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import ExpandableCard from './ExpandableCard';
import Skeleton from './Skeleton';
import ListHeader from './ListHeader';
type PhotosListProps = {
  album: album;
};

export default function PhotosList({ album }: PhotosListProps) {
  const photos = useFetchPhotosQuery(album);
  console.log('photos:', photos);

  function render() {
    if (photos.isLoading) {
      return (
        <div>
          <Skeleton times={3} className='h-10 w-full' />
        </div>
      );
    }
    if (photos.error) {
      return <div>Error: {JSON.stringify(photos.error)}</div>;
    }

    if (photos.data) {
      return (
        <div>
          {photos.data.map((photo: photo) => {
            const photoWithName = { ...photo, name: photo.title };
            return (
              <ExpandableCard key={photo.id} item={photoWithName} isExtendedDefault={true}>
                <div>
                  <img src={`${photo.imageUrl}`} alt='d' width={100} height={100} />
                </div>
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
      <ListHeader label='Photo' onClick={() => console.log('onn..')} />
      <div>{render()}</div>
    </div>
  );
}
