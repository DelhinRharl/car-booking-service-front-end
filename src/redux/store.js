import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import userReducer from './users/userSlice';

export default configureStore({
  reducer: {
    cars: carsReducer,
    user: userReducer,
  },
});
