import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CarDetails from './pages/CarDetails';
import HomePage from './pages/HomePage';
import ReservePage from './pages/reserve';
import SignInPage from './pages/SignIn';
import SigUpPage from './pages/SignUp';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        {/*
         if user not signed in, should display the splash screen, else should
      display the cars page
         */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cars/:carId" element={<CarDetails />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SigUpPage />} />
      </Routes>
    </>
  );
}

export default App;
