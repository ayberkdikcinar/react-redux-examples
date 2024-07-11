import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from '../../utils/utils';
import { character } from '../../types/character';

const fetchAlbums = createAsyncThunk('albums/fetch', async (character: character) => {
  const characterId = character.id;
  const response = await axios.get(`http://localhost:3005/albums?characterId=${characterId}`);
  await pause(2000);
  return response.data;
});

export { fetchAlbums };
