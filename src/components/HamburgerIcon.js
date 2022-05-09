import PropTypes from 'prop-types';

const HamburgerIcon = ({ className = '', onClick = null }) => (
  <button type="button" onClick={onClick} className={className}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="w-full"
    >
      <path
        d="M7.95001 35.95H39.95M7.95001 11.95H39.95H7.95001ZM7.95001 23.95H39.95H7.95001Z"
        stroke="#FDAC01"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

HamburgerIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
HamburgerIcon.defaultProps = { className: '', onClick: null };

export default HamburgerIcon;
