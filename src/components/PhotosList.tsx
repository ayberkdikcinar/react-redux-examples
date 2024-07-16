import React from 'react';
import { album } from '../types/album';
import { photo } from '../types/photo';
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';

import Skeleton from './Skeleton';
import ListHeader from './ListHeader';
import { faker } from '@faker-js/faker';
import PhotoItem from './PhotoItem';
type PhotosListProps = {
  album: album;
};

export default function PhotosList({ album }: PhotosListProps) {
  const photos = useFetchPhotosQuery(album);
  const [addPhoto, resultAdd] = useAddPhotoMutation();

  async function handleAddPhoto() {
    const randomImageUrl = faker.image.imageUrl(500, 500, 'cat', true);
    const newPhoto: photo = {
      albumId: album.id,
      id: new Date().getTime().toString(),
      imageUrl: randomImageUrl,
      title: randomImageUrl.toString(),
    };
    await addPhoto(newPhoto);
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
        return <PhotoItem key={photo.id} photoItem={photo}></PhotoItem>;
      });
    }

    return null;
  }

  return (
    <div>
      <ListHeader label='Photo' onClick={handleAddPhoto} isLoading={resultAdd.isLoading} />
      <div className='mx-8 flex flex-row flex-wrap justify-center'>{render()}</div>
    </div>
  );
}
