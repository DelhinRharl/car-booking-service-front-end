import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import detailsReducer from './cars/detailsSlice';

export default configureStore({
  reducer: {
    cars: carsReducer,
    details: detailsReducer,
  },
});
