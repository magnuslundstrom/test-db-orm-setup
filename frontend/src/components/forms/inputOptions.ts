import { emailValidationRegex } from '@utils/validations';

export const emailInputOptions = {
  required: 'Please enter an email',
  pattern: {
    value: emailValidationRegex,
    message: 'Please enter a valid email',
  },
};

export const passwordInputOptions = {
  required: 'Please enter a password',
  minLength: {
    value: 3,
    message: 'Password must be atleast 3 characters',
  },
  maxLength: {
    value: 20,
    message: 'Password must be maximum 20 characters',
  },
};
