// FormItem.js
import React, { useState } from 'react';
import './FormItem.css';

const FormItem = ({ isValid, children, onValidationChange }) => {
  const [isValidInput, setIsValidInput] = useState(isValid);

  const handleInputChange = (event) => {
    // For demonstration purposes, let's assume the email is valid if it contains the '@' symbol
    setIsValidInput(event.target.value.includes('@'));
  };

  // Notify the Form component when the input validity changes
  React.useEffect(() => {
    onValidationChange(isValidInput);
  }, [isValidInput, onValidationChange]);

  return (
    <div className={`form-item ${isValidInput ? 'valid' : 'invalid'}`}>
      {children}
      {isValidInput ? <div className="valid-text">Valid</div> : <div className="invalid-text">Invalid</div>}
    </div>
  );
};

export default FormItem;
