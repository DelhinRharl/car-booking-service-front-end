import PropTypes from 'prop-types';

const FormError = ({ children = '' }) => (
  <p className="text-red-400">{children}</p>
);

FormError.propTypes = {
  children: PropTypes.string,
};

FormError.defaultProps = { children: '' };

export default FormError;
