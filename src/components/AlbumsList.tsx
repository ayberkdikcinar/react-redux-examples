import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, addCharacter, fetchAlbums } from '../store';
import Skeleton from './Skeleton';
import ExpandableCard from './ExpandableCard';
import { character } from '../types/character';
import PhotosList from './PhotosList';
import ListHeader from './ListHeader';

type AlbumsListProps = {
  character: character;
};
export default function AlbumsList({ character }: AlbumsListProps) {
  const [albums, setAlbums] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await dispatch(fetchAlbums(character)).unwrap();
      setAlbums(response);
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  function render() {
    if (isLoading) {
      return (
        <div>
          <Skeleton times={2} className='h-10 w-full' />
        </div>
      );
    }

    if (albums.length) {
      return (
        <div>
          {albums.map((album: any) => {
            return (
              <ExpandableCard key={album.id} item={album}>
                <PhotosList album={album}></PhotosList>
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
      <ListHeader label='Album' onClick={() => console.log('onn..')} />
      <div>{render()}</div>
    </div>
  );
}
