import PropTypes from 'prop-types';

const PrimaryButton = ({ children, onClick }) => (
  <button
    type="button"
    className="uppercase font-bold bg-amber-500 hover:bg-amber-600 transition-colors py-3 px-6 md:py-5 md:px-12 rounded-xl md:text-2xl"
    onClick={onClick}
  >
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
PrimaryButton.defaultProps = { children: '', onClick: null };
export default PrimaryButton;
