// Form.stories.js
import React, { useState } from 'react';
import Form from './Form';
import FormItem from './FormItem';
import Text from './Text';

export default {
  title: 'Form',
  component: Form,
};

export const Default = () => {
  // State to keep track of form validity
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Clear the form after submission
  };

  // Function to handle form validation
  const handleFormChange = (isValid) => {
    setIsFormValid(isValid);
  };

  return (
    <>
      <Text>Přihlašte se k odběru novinek</Text>
      <Form onSubmit={handleSubmit}>
        {/* Pass isValid prop to the FormItem component */}
        <FormItem name="email" isValid={isFormValid} onValidationChange={handleFormChange}>
          <input type="email" placeholder="Email" />
        </FormItem>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </Form>
    </>
  );
};
