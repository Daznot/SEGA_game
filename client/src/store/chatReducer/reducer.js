/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addMessage = createAsyncThunk(
  '/api/chat',
  async (message, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {},
  extraReducers: {
    [addMessage.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [addMessage.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.message = action.payload;
    },
  },
});

export default chatSlice.reducer;
