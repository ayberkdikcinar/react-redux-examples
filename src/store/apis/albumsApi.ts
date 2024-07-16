import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { character } from '../../types/character';
import { album } from '../../types/album';
const albumsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
  reducerPath: 'albums',
  tagTypes: ['CharacterAlbum', 'Album'],
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (result, error, character) => {
          const tags = result.map((album: album) => {
            return { type: 'Album', id: album.id };
          });
          tags.push({ type: 'CharacterAlbum', id: character.id });
          return tags;
        },
        query: (character: character) => {
          return {
            url: `/albums`,
            method: 'GET',
            params: {
              characterId: character.id,
            },
          };
        },
      }),
      addAlbum: builder.mutation({
        query: (album: album) => {
          return {
            url: '/albums',
            method: 'POST',
            body: album,
          };
        },
        invalidatesTags: (result, error, album) => {
          return [{ type: 'CharacterAlbum', id: album.characterId }];
        },
      }),
      removeAlbum: builder.mutation({
        query: (album: album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        },
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Album', id: album.id }];
        },
      }),
    };
  },
});

export { albumsApi };

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
