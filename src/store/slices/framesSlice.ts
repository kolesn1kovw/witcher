import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Frame } from '@/types/frame';

export const fetchFrames = createAsyncThunk<
  Frame[],
  {
    offset: number;
    limit: number;
  }
>('frames/fetchFrames', async ({ offset, limit }, thunkAPI) => {
  const url = `https://66ae92edb05db47acc57e5db.mockapi.io/frames/frames?page=${offset}&limit=${limit}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error('something when wrong!');
      return [];
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const framesSlice = createSlice({
  name: 'frames',
  initialState: {
    frames: [] as Frame[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFrames.fulfilled, (state, action) => {
      state.frames = action.payload;
    });
  },
});

export default framesSlice.reducer;
