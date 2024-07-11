import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from '../../utils/utils';
import { faker } from '@faker-js/faker';

const addAlbum = createAsyncThunk('albums/add', async () => {
  const response = await axios.post('http://localhost:3005/albums', {
    name: faker.name.fullName(),
    id: nanoid(),
    characterId: '1',
  });
  await pause(2000);
  return response.data;
});

export { addAlbum };
