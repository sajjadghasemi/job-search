import { createSlice } from '@reduxjs/toolkit';
import { defaultDb } from './db';

const initialState = {
  defaultDb,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp(state) {
      state.defaultDb.users.push({
        firstName: 'sajjad',
        lastName: 'abolfazl',
        cv: null,
        password: '1234',
        email: 'sa',
        id: '2',
      });
    },
  },
});

export const { signUp } = authSlice.actions;

export default authSlice.reducer;
