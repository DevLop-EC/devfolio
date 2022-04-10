import PropTypes from 'prop-types';
import React from 'react';

import './ButtonForm.scss';

const ButtonForm = ({ loading, sendEmail, children }) => {
  return (
    <button
      type="submit"
      onClick={sendEmail}
      className={!loading ? 'button' : 'button processing'}
    >
      <span>{children}</span>
      <svg viewBox="0 0 15 13">
        <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
      </svg>
    </button>
  );
};

ButtonForm.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonForm;
