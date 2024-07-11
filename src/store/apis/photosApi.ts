import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { album } from '../../types/album';
import { photo } from '../../types/photo';

const photosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  reducerPath: 'photos',
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album: album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id,
            },
            method: 'GET',
          };
        },
      }),
      addPhoto: builder.mutation({
        query: (photo: photo) => {
          return {
            url: '/photos',
            body: photo,
            method: 'POST',
          };
        },
      }),
    };
  },
});

export { photosApi };
export const { useFetchPhotosQuery, useAddPhotoMutation } = photosApi;
