import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { album } from '../../types/album';
import { photo } from '../../types/photo';

const photosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  reducerPath: 'photos',
  tagTypes: ['Photo'],
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
        providesTags: (result, error, args) => {
          return [{ type: 'Photo', id: args.id }];
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
        invalidatesTags: (result, error, args) => {
          return [{ type: 'Photo', id: args.albumId }];
        },
      }),
      removePhoto: builder.mutation({
        query: (photo: photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: 'DELETE',
          };
        },
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'Photo', id: photo.albumId }];
        },
      }),
    };
  },
});

export { photosApi };
export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
