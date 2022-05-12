import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CarDetails from './pages/CarDetails';
import HomePage from './pages/HomePage';
import MyReservations from './pages/MyReservations';
import ReservePage from './pages/reserve';
import SignInPage from './pages/SignIn';
import SigUpPage from './pages/SignUp';
import SplashScreen from './pages/SplashScreen';

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
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
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SigUpPage />} />
      </Routes>
    </main>
  );
}

export default App;
