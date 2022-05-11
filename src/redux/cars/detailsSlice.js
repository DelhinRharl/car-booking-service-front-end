import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  details: [],
  isLoading: false,
};

export const fetchSingleCar = createAsyncThunk(`cars/fetchDetails`, async () => {
  const res = await fetch(`http://localhost:3000/api/v1/cars/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
});

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.details = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCar.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    });
    builder.addCase(fetchSingleCar.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.details = action.payload;
    });
  },
});

export const { setDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
