import userReducer, {
  logUserIn,
  logUserOut,
} from '../../redux/users/userSlice';

describe('Testing userSlice', () => {
  it('initial state is set to false', () => {
    expect(userReducer(undefined, {}).isLoggedIn).toBe(false);
  });

  it('sets state to true', () => {
    const prevState = { isLoggedIn: false };
    expect(userReducer(prevState, logUserIn()).isLoggedIn).toBe(true);
  });

  it('sets state to false', () => {
    const prevState = { isLoggedIn: true };
    expect(userReducer(prevState, logUserOut()).isLoggedIn).toBe(false);
  });
});
