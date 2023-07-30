import React from 'react';
import InputField from './InputField';

export default {
  title: 'Form/InputField',
  component: InputField,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'numeric', 'password', 'email'],
      },
    },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
};

export const Numeric = Template.bind({});
Numeric.args = {
  type: 'numeric',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
};
