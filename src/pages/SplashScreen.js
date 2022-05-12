import { useState } from 'react';
import AuthModal from '../components/AuthModal';
import PrimaryButton from '../components/PrimaryButton';

const SplashScreen = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openAuthModal = (isLogin = true) => {
    if (isLogin) {
      setIsLoginModalOpen(true);
      setIsSignUpModalOpen(false);
    } else {
      setIsLoginModalOpen(false);
      setIsSignUpModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  return (
    <section className="splash-screen w-full min-h-screen text-white flex flex-col items-center justify-center gap-12 py-10">
      <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-7xl">
        BOOK YOUR PREMIUM CAR
        <span className="block">EASILY</span>
      </h1>
      {isLoginModalOpen && <AuthModal closeModal={closeModal} />}
      {isSignUpModalOpen && (
        <AuthModal isLogin={false} closeModal={closeModal} />
      )}
      {!(isLoginModalOpen || isSignUpModalOpen) && (
        <>
          <PrimaryButton onClick={openAuthModal}>Sign In</PrimaryButton>
          <button
            className="font-bold uppercase -mt-4 hover:opacity-60"
            type="button"
            onClick={openAuthModal.bind(this, false)}
          >
            Sign up
          </button>
        </>
      )}
    </section>
  );
};
export default SplashScreen;
