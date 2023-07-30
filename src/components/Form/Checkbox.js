/*
    komponenty - formulářové prvky - checkbox
*/

import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, onChange }) => {
  const checkboxStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid black',
    backgroundColor: checked ? '#357BC2' : 'lightgray',
    padding: '2px',
    cursor: 'pointer',
    display: 'inline-block',
  };

  return <div style={checkboxStyle} onClick={onChange} />;
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
