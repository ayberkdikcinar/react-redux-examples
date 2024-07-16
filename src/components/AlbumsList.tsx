import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, addCharacter, fetchAlbums, useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandableCard from './ExpandableCard';
import { character } from '../types/character';
import PhotosList from './PhotosList';
import ListHeader from './ListHeader';
import AlbumItem from './AlbumItem';
import { album } from '../types/album';
import { faker } from '@faker-js/faker';

type AlbumsListProps = {
  character: character;
};
export default function AlbumsList({ character }: AlbumsListProps) {
  const albums = useFetchAlbumsQuery(character);
  const [addAlbum, addAlbumResult] = useAddAlbumMutation();

  function handleAdd() {
    const newAlbum: album = {
      characterId: character.id,
      id: new Date().getTime().toString(),
      name: faker.name.fullName(),
    };
    addAlbum(newAlbum);
  }

  function render() {
    if (albums.isFetching) {
      return (
        <div>
          <Skeleton times={2} className='h-10 w-full' />
        </div>
      );
    }

    if (albums.data) {
      return albums.data.map((album: any) => {
        return <AlbumItem albumItem={album} key={album.id}></AlbumItem>;
      });
    }

    return null;
  }
  return (
    <div>
      <ListHeader label='Album' onClick={handleAdd} />
      <div>{render()}</div>
    </div>
  );
}
