import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

ProtectedRoute.propTypes = { children: PropTypes.element.isRequired };

export default ProtectedRoute;
