import PropTypes from 'prop-types';

const CloseIcon = ({ className = '', onClick = null }) => (
  <button type="button" onClick={onClick} className={className}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      className="w-full"
    >
      <path
        d="M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z"
        fill="#FDAC01"
      />
    </svg>
  </button>
);

CloseIcon.propTypes = { className: PropTypes.string, onClick: PropTypes.func };

CloseIcon.defaultProps = { className: '', onClick: null };

export default CloseIcon;
