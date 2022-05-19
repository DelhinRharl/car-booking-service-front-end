import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
};

ProtectedRoute.propTypes = { children: PropTypes.element.isRequired };

export default ProtectedRoute;
