import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from '../../utils/utils';

const fetchCharacters = createAsyncThunk('character/fetch', async () => {
  const response = await axios.get('http://localhost:3005/characters');
  await pause(2000);
  return response.data;
});

export { fetchCharacters };
