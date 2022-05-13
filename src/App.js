import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import authenticateUser from './helpers/authentication';
import CarDetails from './pages/CarDetails';
import HomePage from './pages/HomePage';
import MyReservations from './pages/MyReserations';
import ReservePage from './pages/reserve';
import SplashScreen from './pages/SplashScreen';
import { logUserIn } from './redux/users/userSlice';

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const setUser = async (token) => {
    const user = await authenticateUser(token);
    dispatch(logUserIn(user));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setUser(token);
  }, []);

  return (
    <main className="md:flex min-h-screen">
      {isLoggedIn && <Sidebar />}
      <Routes>
        {/*
         if user not signed in, should display the splash screen, else should
      display the cars page
         */}
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <SplashScreen />}
        />
        <Route path="/cars/:carId" element={<CarDetails />} />
        <Route
          path="/reserve"
          element={(
            <ProtectedRoute>
              <ReservePage />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/my-reservations"
          element={(
            <ProtectedRoute>
              <MyReservations />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/admin/manage-cars"
          element={(
            <ProtectedRoute>
              <h1>Manage cars</h1>
            </ProtectedRoute>
          )}
        />
      </Routes>
    </main>
  );
}

export default App;
