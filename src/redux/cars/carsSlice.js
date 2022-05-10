import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  isLoading: false,
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const res = await fetch('http://localhost:3000/api/v1/cars');
  const data = await res.json();
  console.log(data);
  return data;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.cars = action.payload;
    });
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
