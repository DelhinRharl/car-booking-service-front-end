import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  isLoading: false,
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const res = await fetch('https://car-booking-premium.herokuapp.com/api/v1/cars');
  const data = await res.json();
  return data;
});

export const addCar = createAsyncThunk('cars/addCar', async (body) => {
  const res = await fetch('https://car-booking-premium.herokuapp.com/api/v1/cars/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
});

export const deleteCar = createAsyncThunk('cars/deleteCar', async (id) => {
  const res = await fetch(`https://car-booking-premium.herokuapp.com/api/v1/cars/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();

  return Number(data);
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
    builder.addCase(addCar.fulfilled, (state, action) => {
      state.cars.push(action.payload);
    });
    builder.addCase(deleteCar.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    });
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
