import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logUserOut } from '../redux/users/userSlice';
import CloseIcon from './CloseIcon';
import HamburgerIcon from './HamburgerIcon';
import NavItem from './NavItem';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logUserOut());
    localStorage.removeItem('token');
  };

  return (
    <>
      <header className="md:hidden py-5 fixed z-20">
        <HamburgerIcon className="w-10" onClick={openMenu} />
      </header>
      <div
        className={`fixed left-0 top-0 ${
          isMenuOpen ? '' : 'hidden'
        } md:hidden w-screen h-screen bg-black opacity-25 z-10`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        className={`fixed md:static left-0 top-0 bg-white z-20 h-screen md:h-auto w-4/5 md:w-1/5 md:translate-x-0 ${
          isMenuOpen ? '' : '-translate-x-full'
        } transition-all border-r`}
      >
        <div className="w-full h-full relative py-10 flex items-center justify-center">
          <CloseIcon
            className="absolute left-6 top-6 md:hidden w-10 h-10"
            onClick={closeMenu}
          />

          <nav className="w-full">
            <ul>
              <NavItem link="/" closeMenu={closeMenu}>
                Models
              </NavItem>
              <NavItem link="/reserve" closeMenu={closeMenu}>
                Reserve
              </NavItem>
              <NavItem link="/my-reservations" closeMenu={closeMenu}>
                My reservations
              </NavItem>
              <NavItem link="/sign-out" handleLogOut={handleLogOut}>
                Sign Out
              </NavItem>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
