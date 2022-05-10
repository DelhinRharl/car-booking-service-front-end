import carsReducer, { setCars } from '../../redux/cars/carsSlice';

describe('Testing carsSlice', () => {
  it('initial state is empty', () => {
    expect(carsReducer(undefined, {}).cars.length).toBe(0);
  });

  it('sets the state correctly', () => {
    const prevState = { cars: [] };
    const payload = [
      { model: 'Mercedes', year: 2022 },
      { model: 'Ferrari', year: 2022 },
    ];
    expect(carsReducer(prevState, setCars(payload)).cars.length).toBe(2);
  });
});
