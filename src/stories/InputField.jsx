import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${(props) => (props.error ? 'red' : 'lightgray')};
  color: black;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const InputField = ({ type, ...rest }) => {
  const [error, setError] = useState(false);

  let inputType = 'text';
  let pattern = undefined;
  let placeholder = '';

  switch (type) {
    case 'numeric':
      inputType = 'text';
      pattern = '[0-9]*';
      placeholder = 'Only numbers allowed';
      break;
    case 'password':
      inputType = 'password';
      placeholder = 'Enter your password';
      break;
    case 'email':
      inputType = 'text';
      pattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
      placeholder = 'Enter your email (e.g., example@example.com)';
      break;
    default:
      inputType = 'text';
  }

  const handleInputChange = (event) => {
    const value = event.target.value;

    // Prevent letters for numeric input type
    if (type === 'numeric' && /\D/.test(value)) {
      setError(true);
    } else {
      setError(false);
      rest.onChange && rest.onChange(event); // Pass the onChange event if it's provided
    }
  };

  return (
    <StyledInput
      type={inputType}
      pattern={pattern}
      placeholder={placeholder}
      error={error}
      onChange={handleInputChange}
      {...rest}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'numeric', 'password', 'email']),
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
