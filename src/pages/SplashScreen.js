import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

const SplashScreen = () => (
  <section className="splash-screen w-full h-full text-white flex flex-col items-center justify-center gap-12">
    <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-7xl">
      BOOK YOUR PREMIUM CAR
      <span className="block">EASILY</span>
    </h1>
    <Link to="/signin">
      <PrimaryButton>Sign In</PrimaryButton>
    </Link>
    <Link
      to="/signup"
      className="font-bold uppercase md:text-2xl -mt-4 hover:opacity-60"
    >
      Sign up
    </Link>
  </section>
);
export default SplashScreen;
