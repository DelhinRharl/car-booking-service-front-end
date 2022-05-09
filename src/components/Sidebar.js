import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CloseIcon from './CloseIcon';
import HamburgerIcon from './HamburgerIcon';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="md:hidden py-5">
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
              <li className="text-center">
                <NavLink
                  to="/"
                  className="uppercase font-bold block w-full h-full py-4 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Models
                </NavLink>
              </li>
              <li className="text-center py-4">
                <NavLink
                  to="/reserve"
                  className="uppercase font-bold block w-full h-full py-4 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Reserve
                </NavLink>
              </li>
              <li className="text-center py-4">
                <NavLink
                  to="/sign-out"
                  className="uppercase font-bold block w-full h-full py-4 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
