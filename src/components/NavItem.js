import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({
  link, closeMenu, children, handleLogOut = null,
}) => {
  if (!handleLogOut) {
    return (
      <li className="text-center">
        <NavLink
          to={link}
          className="uppercase font-bold block w-full h-full py-4 transition-colors duration-300 hover:bg-amber-200"
          onClick={closeMenu}
        >
          {children}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="text-center">
      <button
        type="button"
        className="uppercase font-bold block w-full h-full py-4 transition-colors duration-300 hover:bg-amber-200"
        onClick={handleLogOut}
      >
        {children}
      </button>
    </li>
  );
};
NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  closeMenu: PropTypes.func,
  children: PropTypes.string,
  handleLogOut: PropTypes.func,
};
NavItem.defaultProps = {
  closeMenu: null,
  children: '',
  handleLogOut: null,
};

export default NavItem;
