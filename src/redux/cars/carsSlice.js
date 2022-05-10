import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cars = action.payload;
    },
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
