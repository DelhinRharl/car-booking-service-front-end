import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ link, closeMenu, children }) => (
  <li className="text-center">
    <NavLink
      to={link}
      className="uppercase font-bold block w-full h-full py-4 transition-colors duration-300"
      onClick={closeMenu}
    >
      {children}
    </NavLink>
  </li>
);
NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  closeMenu: PropTypes.func,
  children: PropTypes.string,
};
NavItem.defaultProps = { closeMenu: null, children: '' };

export default NavItem;
