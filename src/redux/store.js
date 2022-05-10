import { configureStore } from '@reduxjs/toolkit';
import { carsSlice } from './cars/carsSlice';

export default configureStore({
  reducer: {
    cars: carsSlice,
  },
});
