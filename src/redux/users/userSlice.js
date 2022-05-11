import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
    },
    logUserOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
    },
  },
});

export const { logUserIn, logUserOut } = userSlice.actions;

export default userSlice.reducer;
