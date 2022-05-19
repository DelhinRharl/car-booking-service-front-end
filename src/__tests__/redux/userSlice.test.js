import userReducer, {
  logUserIn,
  logUserOut,
} from '../../redux/users/userSlice';

describe('Testing userSlice', () => {
  it('initial state is set to false', () => {
    expect(userReducer(undefined, {}).isLoggedIn).toBe(false);
  });

  it('initial state is set to null', () => {
    expect(userReducer(undefined, {}).user).toBe(null);
  });

  it('sets state to true', () => {
    const prevState = { isLoggedIn: false };
    expect(userReducer(prevState, logUserIn()).isLoggedIn).toBe(true);
  });

  it('sets user', () => {
    const user = { name: 'test', email: 'test@example.com', password: 'test' };
    const prevState = { isLoggedIn: false, user };
    expect(userReducer(prevState, logUserIn(user)).user).toBe(user);
    expect(userReducer(prevState, logUserIn(user)).user.name).toBe('test');
  });

  it('sets state to false', () => {
    const prevState = { isLoggedIn: true };
    expect(userReducer(prevState, logUserOut()).isLoggedIn).toBe(false);
  });
});
