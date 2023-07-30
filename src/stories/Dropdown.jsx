/*
    komponenty - formulářové prvky - menu s výběrem
*/

import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ content, onSelect }) => {
  const dropdownStyle = {
    backgroundColor: 'orange',
    color: 'white',
    border: '1px solid black',
    padding: '8px',
    cursor: 'pointer',
  };

  const selectedItemStyle = {
    backgroundColor: '#357BC2',
  };

  return (
    <select
      style={{ ...dropdownStyle, ...(content ? selectedItemStyle : null) }}
      onChange={(e) => onSelect(e.target.value)}
      value={content}
    >
      <option value="" disabled>
        Nevybrána žádná možnost!
      </option>
      <option value="O1">Možnost 1</option>
      <option value="O2">Další možnost</option>
      <option value="O3">Poslední možnost</option>
    </select>
  );
};

Dropdown.propTypes = {
  content: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  content: '',
};

export default Dropdown;
