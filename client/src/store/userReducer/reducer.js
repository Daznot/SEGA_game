/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SIGN_IN_URL = '/api/sign/in/';
const SIGN_UP_URL = '/api/sign/up/';
const SIGN_OUT_URL = '/api/sign/out/';
const USR_UPD_URL = '/api/user/';
const USR_UPLOAD_AVATAR = '/api/avatar/';

export const sendMoney = createAsyncThunk(
  '/api/user/money',
  async (money, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/user/money', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameMoney: money.gameMoney,
          userMoney: money.userMoney,
        }),
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signData = createAsyncThunk(
  '/api/sign/in',
  async (event, { rejectWithValue }) => {
    try {
      const responce = await fetch(SIGN_IN_URL, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  '/api/sign/in',
  async (event, { rejectWithValue }) => {
    try {
      const responce = await fetch(SIGN_IN_URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: event.target.email.value,
          password: event.target.password.value,
        }),
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signUp = createAsyncThunk(
  '/api/sign/up',
  async (event, { rejectWithValue }) => {
    try {
      const responce = await fetch(SIGN_UP_URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          password: [event.target.password.value, event.target.pswdcfrm.value],
        }),
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signOut = createAsyncThunk(
  '/api/sign/out',
  async (event, { rejectWithValue }) => {
    try {
      const responce = await fetch(SIGN_OUT_URL, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editUser = createAsyncThunk(
  '/api/user',
  async (event, { rejectWithValue }) => {
    try {
      const response = await fetch(USR_UPD_URL, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const uploadAvatar = createAsyncThunk(
  '/api/avatar',
  async (event, { rejectWithValue }) => {
    try {
      const formData = new FormData(event.target);
      const response = await fetch(USR_UPLOAD_AVATAR, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    error: false,
  },
  reducers: {
    buy(state) {
      state.user.money -= 100;
    },
  },
  extraReducers: {
    [signData.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signData.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user = action.payload.user;
    },
    [signIn.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = 'resolved';
      if (action.payload.message === 'Incorrect password!' || action.payload.message === 'User not found!') {
        state.error = true;
      } else {
        state.user = action.payload.user;
      }
    },
    [signUp.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = 'resolved';
      if (action.payload.message === 'Incorrect password!' || action.payload.message === 'User exists!') {
        state.error = action.payload.message;
      } else {
        state.user = action.payload.user;
      }
    },
    [editUser.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [editUser.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user = action.payload;
    },
    [signOut.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signOut.fulfilled]: (state) => {
      state.status = 'resolved';
      state.user = undefined;
    },
    [uploadAvatar.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [uploadAvatar.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user.avatar = action.payload.avatar;
    },
    [sendMoney.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [sendMoney.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user.money = action.payload.money;
    },
  },
});

export const { buy } = userSlice.actions;

export default userSlice.reducer;
