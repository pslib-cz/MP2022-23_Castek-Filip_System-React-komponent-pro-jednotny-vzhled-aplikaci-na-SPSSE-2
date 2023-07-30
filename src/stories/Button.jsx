/*
    komponenty - formulářové prvky - tlačítko
*/

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text, size, disabled }) => {
  const buttonStyle = {
    backgroundColor: disabled ? 'lightgray' : '#357BC2',
    color: disabled ? 'black' : 'white',
    border: disabled ? '1px solid black' : '1px solid #357BC2',
    borderRadius: '8px',
    padding: size === 'large' ? '12px 24px' : '8px 16px',
    fontSize: size === 'large' ? '1.5rem' : '1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button onClick={onClick} style={buttonStyle} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'small',
  disabled: false,
};

export default Button;
