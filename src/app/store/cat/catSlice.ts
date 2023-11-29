import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Cat {
  id: string;
  url: string;
}

interface CatState {
  cats: Cat[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CatState = {
  cats: [],
  status: 'idle',
  error: null,
};

export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cats = action.payload.map((cat: any) => ({
          id: cat.id,
          url: cat.url,
        }));
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default catSlice.reducer;
