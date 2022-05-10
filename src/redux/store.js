import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';

export default configureStore({
  reducer: {
    cars: carsReducer,
  },
});
