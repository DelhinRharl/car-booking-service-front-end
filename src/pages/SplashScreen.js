import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

const SplashScreen = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsLoginModalOpen(false);
  };

  return (
    <section className="splash-screen w-full h-full text-white flex flex-col items-center justify-center gap-12">
      <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-7xl">
        BOOK YOUR PREMIUM CAR
        <span className="block">EASILY</span>
      </h1>
      {isLoginModalOpen && <h2>login</h2>}
      {isSignUpModalOpen && <h2>sign up</h2>}
      <PrimaryButton onClick={openLoginModal}>Sign In</PrimaryButton>
      <button
        className="font-bold uppercase md:text-2xl -mt-4 hover:opacity-60"
        type="button"
        onClick={openSignUpModal}
      >
        Sign up
      </button>
    </section>
  );
};
export default SplashScreen;
