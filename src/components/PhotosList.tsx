import React from 'react';
import { album } from '../types/album';
import { photo } from '../types/photo';
import { useAddPhotoMutation, useFetchPhotosQuery, useRemovePhotoMutation } from '../store';
import ExpandableCard from './ExpandableCard';
import Skeleton from './Skeleton';
import ListHeader from './ListHeader';
import { faker } from '@faker-js/faker';
type PhotosListProps = {
  album: album;
};

export default function PhotosList({ album }: PhotosListProps) {
  const photos = useFetchPhotosQuery(album);
  const [addPhoto, resultAdd] = useAddPhotoMutation();
  const [removePhoto, resultRemove] = useRemovePhotoMutation();

  async function handleAddPhoto() {
    const randomImageUrl = faker.image.imageUrl(500, 500, 'cat', true);
    const photo: photo = {
      albumId: album.id,
      id: new Date().getTime().toString(),
      imageUrl: randomImageUrl,
      title: randomImageUrl.toString(),
    };
    await addPhoto(photo);
  }

  function handleRemovePhoto(photo: photo) {
    removePhoto(photo);
  }

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
      return photos.data.map((photo: photo) => {
        const photoWithName = { ...photo, name: photo.title };
        return (
          <ExpandableCard
            key={photo.id}
            item={photoWithName}
            isExtendedDefault={true}
            onTrashClick={() => handleRemovePhoto(photo)}
          >
            <div>
              <img src={`${photo.imageUrl}`} alt='d' width={100} height={100} />
            </div>
          </ExpandableCard>
        );
      });
    }

    return null;
  }

  return (
    <div>
      <ListHeader label='Photo' onClick={handleAddPhoto} isLoading={resultAdd.isLoading} />
      <div>{render()}</div>
    </div>
  );
}
