// Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do whatever you need to do with the form data here
    // For demonstration purposes, let's just log the form data
    console.log('Form submitted:', event.target.elements);
    // Clear the form inputs
    event.target.reset();
    // Reset the form validation
    setIsFormValid(false);
  };

  const handleValidationChange = (isValid) => {
    // Check if any of the form inputs are invalid
    setIsFormValid(!isValid);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onValidationChange: handleValidationChange })
      )}
      <button type="submit" disabled={isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
