import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from '../../utils/utils';
import { faker } from '@faker-js/faker';

const addCharacter = createAsyncThunk('character/add', async () => {
  const response = await axios.post('http://localhost:3005/characters', {
    name: faker.name.fullName(),
    id: nanoid(),
  });
  await pause(2000);
  return response.data;
});

export { addCharacter };
